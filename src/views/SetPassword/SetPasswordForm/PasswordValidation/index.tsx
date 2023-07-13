import React, { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';

import { Container, Bar, Label, Props, FlexRow } from './style';

export const PasswordValidation: React.FC<Props> = ({ password, onChange }) => {
  const { t } = useTranslation('common');
  const [color, setColor] = useState<string>('#ccc');

  useEffect(() => {
    const { color } = validatePassword(password);
    setColor(color);
  }, [password]);

  const validatePassword = (password: string): { score: number; color: string; bar: number } => {
    let score = 0;
    let color = '#ccc';
    let bar = 0;

    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[@$!%*?&]/.test(password)) score++;

    if (score === 1) {
      color = 'red';
      bar = 1;
    } else if (score > 1 && score <= 3) {
      color = 'yellow';
      bar = score;
    } else if (score >= 4) {
      color = 'green';
      bar = 4;
    }

    onChange(score);
    return { score, color, bar };
  };

  let strength = '';
  const { score, bar } = validatePassword(password);

  if (password.length > 0 && score < 2) {
    strength = 'week';
  } else if (score > 0 && score <= 3) {
    strength = 'medium';
  } else if (score >= 4) {
    strength = 'good';
  }

  return (
    <Container>
      <FlexRow>
        <Bar color={bar >= 1 ? color : undefined} />
        <Bar color={bar >= 2 ? color : undefined} />
        <Bar color={bar >= 3 ? color : undefined} />
        <Bar color={bar >= 4 ? color : undefined} />
      </FlexRow>
      {!!strength && (
        <Label>
          {t('setPassword.strength')}: {t(`setPassword.${strength}`)}
        </Label>
      )}
    </Container>
  );
};
