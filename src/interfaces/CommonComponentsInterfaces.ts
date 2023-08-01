import {
  IconButtonProps,
  StandardTextFieldProps,
  FormLabelProps,
  BoxProps,
  CheckboxProps,
  FormControlLabelProps,
  MenuProps,
  DialogProps,
  SelectProps,
  FormControlProps,
  TypographyProps,
  SwitchProps,
} from '@mui/material';
import { CSSProperties, ReactNode } from 'react';
import { UseFormReturn } from 'react-hook-form';

export interface ReactFCPropsWithChildren<C> extends React.FC<React.PropsWithChildren<C>> {}

interface IIconBtnProps extends IconButtonProps {
  iconClassName?: string;
}

export interface IQOutlinedTextFieldProps extends StandardTextFieldProps {
  label?: string;
  labelProps?: FormLabelProps;
  required?: boolean;
  requiredIcon?: ReactNode;
  startIconProps?: IIconBtnProps;
  endIconProps?: IIconBtnProps;
  errors?: string | string[];
  fieldInfo?: ReactNode;
  containerProps?: BoxProps;
}

export interface IQStandardTextFieldProps extends StandardTextFieldProps {
  errors?: string | string[];
}

export type HookFormProps = Partial<UseFormReturn>;
export interface IControllerProps {
  name: string;
  hookFormProps: Omit<HookFormProps, 'control'> & { control: any };
}

export interface IQOutlinedTextFieldWithControllerProps
  extends Omit<IQOutlinedTextFieldProps, 'name'>,
    IControllerProps {}

// Checkboxes interfaces
export interface IQCheckboxProps extends CheckboxProps {
  label?: FormControlLabelProps['label'];
  formControlLabelProps?: FormControlLabelProps;
}

export interface IQMenuProps extends MenuProps {
  menuClassName?: string;
  maxWidth?: CSSProperties['maxWidth'];
}

export interface IQModalProps extends DialogProps {
  modalClassName?: string;
  disableCloseBtn?: boolean;
  modalMaxWidthValue?: string | number;
  onHandleCollapse?: () => void;
}

// Selects interfaces
export interface IQSelectProps extends SelectProps {
  formControlProps?: FormControlProps;
  emptyValue?: string;
  errors?: string | string[];
  loading?: boolean;
  onHandleClear?: () => void;
}

export interface IQSelectOutlinedProps extends IQSelectProps {
  label?: string;
  labelProps?: FormLabelProps;
  fieldInfo?: ReactNode;
}

export interface IQSelectOutlinedWithControllerProps extends Omit<IQSelectOutlinedProps, 'name'>, IControllerProps {}

// Switches interfaces
export interface IQSwitchProps extends SwitchProps {
  label?: FormControlLabelProps['label'];
  labelProps?: TypographyProps;
  labelClassName?: string;
  containerClassName?: string;
}

export interface IQSwitchWithControllerProps extends Omit<IQSwitchProps, 'name'>, IControllerProps {}
