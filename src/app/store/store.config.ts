import { NgxsConfig } from '@ngxs/store/src/symbols';
import { NgxsDevtoolsOptions } from '@ngxs/devtools-plugin/src/symbols';
import { NgxsLoggerPluginOptions } from '@ngxs/logger-plugin/src/symbols';

import { environment } from 'src/environments/environment';

import { SplashState } from './splash.state';
import { MenuState } from './menu.state';
import { ProjectsState } from './projects.state';
import { MeState } from './me.state';

export const STATES_MODULES = [SplashState, MenuState, ProjectsState, MeState];

export const OPTIONS_CONFIG: Partial<NgxsConfig> = {
  developmentMode: !environment.production,
};

export const DEVTOOLS_REDUX_CONFIG: NgxsDevtoolsOptions = {
  disabled: environment.production,
};

export const LOGGER_CONFIG: NgxsLoggerPluginOptions = {
  disabled: environment.production,
};
