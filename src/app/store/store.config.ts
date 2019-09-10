import { ProjectsState } from './projects.state';
import { NgxsConfig } from '@ngxs/store/src/symbols';
import { NgxsDevtoolsOptions } from '@ngxs/devtools-plugin/src/symbols';
import { NgxsLoggerPluginOptions } from '@ngxs/logger-plugin/src/symbols';

export const STATES_MODULES = [ProjectsState];

export const OPTIONS_CONFIG: Partial<NgxsConfig> = {
  developmentMode: false,
};

export const DEVTOOLS_REDUX_CONFIG: NgxsDevtoolsOptions = {
  disabled: true,
};

export const LOGGER_CONFIG: NgxsLoggerPluginOptions = {
  disabled: true,
};
