import React, { InputHTMLAttributes, useState } from 'react';
import Image from 'next/legacy/image';

import EZError from '@/components/Error';
import { useSnack } from '@/hooks/snack';

import { Label, LabelContainer } from '../styles';

import { Container, IconContainer, PreviewContainer } from './styles';

interface PropTypes extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  dataTestId?: string;
  feedback?: string;
  small?: boolean;
  disablePreview?: boolean;
}

const FileInput = ({ label, dataTestId, required, onChange, feedback, small, disablePreview, ...rest }: PropTypes) => {
  const [url, setUrl] = useState<string | null>(null);

  const acceptableTypes = ['image/png', 'image/jpeg', 'image/jpg'];
  const { showSnack } = useSnack();

  return (
    <>
      {label && (
        <LabelContainer>
          <Label>
            {label} {required && <span>*</span>}
          </Label>
        </LabelContainer>
      )}
      <Container $small={small || false}>
        <label htmlFor='file-input' data-testid={dataTestId}>
          <input
            onChange={e => {
              if (e.target.files?.length) {
                if (!acceptableTypes.includes(e.target.files[0].type)) {
                  showSnack({
                    type: 'error',
                    message: 'invalid_file',
                  });
                  return;
                }

                setUrl(URL.createObjectURL(e.target.files[0]));
                if (onChange) {
                  onChange(e);
                }
              }
            }}
            accept='image/*'
            id='file-input'
            type='file'
            {...rest}
          />

          <IconContainer>
            <Image src={'/icons/upload.svg'} alt='icon' layout='fill' objectFit='contain' />
          </IconContainer>
          <p>Upload</p>
        </label>
      </Container>
      {url && !disablePreview && (
        <PreviewContainer>
          <Image src={url} alt='preview' layout='fill' objectFit='contain' />
        </PreviewContainer>
      )}
      {feedback && <EZError>{feedback}</EZError>}
    </>
  );
};

export default FileInput;
