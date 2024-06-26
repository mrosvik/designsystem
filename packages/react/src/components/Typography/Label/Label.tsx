import type { LabelHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import cl from 'clsx';
import { Slot } from '@radix-ui/react-slot';

type FontWeights = 'regular' | 'medium' | 'semibold';

export type LabelProps = {
  /** Changes text sizing */
  size?: 'xsmall' | 'small' | 'medium' | 'large';
  /** Adds margin-bottom */
  spacing?: boolean;
  /** Adjusts font weight. Use this when you have a label hierarchy, such as checkboxes/radios in a fieldset */
  weight?: FontWeights;
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;
} & LabelHTMLAttributes<HTMLLabelElement>;

/** Use `Label` for labels. */
export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  (
    {
      className,
      size = 'medium',
      spacing,
      weight = 'medium',
      asChild,
      ...rest
    },
    ref,
  ) => {
    const Component = asChild ? Slot : 'label';

    return (
      <Component
        ref={ref}
        className={cl(
          'fds-label',
          `fds-label--${size}`,
          spacing && 'fds-label--spacing',
          weight && `fds-label--${weight}-weight`,
          className,
        )}
        {...rest}
      />
    );
  },
);

Label.displayName = 'Label';
