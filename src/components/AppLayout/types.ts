import { WithChildrenProps } from '../../types';

export interface AppLayoutProps extends WithChildrenProps {
  variant?: 'centered' | 'minimal' | 'full';
}
