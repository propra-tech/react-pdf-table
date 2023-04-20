import { DocsContainer as BaseContainer, DocsContainerProps } from '@storybook/addon-docs';
import { themes } from '@storybook/theming';
import * as React from 'react';
import { useDarkMode } from 'storybook-dark-mode';

// @see https://github.com/hipstersmoothie/storybook-dark-mode/issues/127#issuecomment-1500328565
export const DocsContainer: React.FC<DocsContainerProps> = (props) => (
  <BaseContainer {...props} theme={useDarkMode() ? themes.dark : themes.light} />
);
