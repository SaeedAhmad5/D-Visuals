import {
  USER_ROLE_APP_ADMIIN,
  USER_ROLE_ORGANIZATION_ADMIIN,
  USER_ROLE_ORGANIZATION_MANAGER,
  USER_ROLE_ORGANIZATION_USER,
} from '@EventZeroHuddle/ts-constants/dist/account';

import { Organization } from '@/types/organizations';

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  profileImage: string;
  phoneNumber: string;
  role:
    | typeof USER_ROLE_APP_ADMIIN
    | typeof USER_ROLE_ORGANIZATION_ADMIIN
    | typeof USER_ROLE_ORGANIZATION_MANAGER
    | typeof USER_ROLE_ORGANIZATION_USER;
  isEmailVerified: boolean;
  isPhoneNumberVerified: boolean;
  organizationId: string;
  createdAt: string;
  updatedAt: string;
  organization: Organization;
}
