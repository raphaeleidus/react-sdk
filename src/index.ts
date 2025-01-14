/**
 * Copyright 2018-2019, Optimizely
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export { OptimizelyContext, OptimizelyContextConsumer, OptimizelyContextProvider } from './Context';
export { OptimizelyProvider } from './Provider';
export { OptimizelyFeature } from './Feature';
export { useFeature, useExperiment, useDecision } from './hooks';
export { withOptimizely, WithOptimizelyProps, WithoutOptimizelyProps } from './withOptimizely';
export { OptimizelyExperiment } from './Experiment';
export { OptimizelyVariation } from './Variation';
export { OptimizelyDecision } from './utils';

export
 {
  logging,
  errorHandler,
  setLogger,
  setLogLevel,
  enums,
  eventDispatcher,
  OptimizelyDecideOption,
  ActivateListenerPayload,
  TrackListenerPayload,
  ListenerPayload
} 
from '@optimizely/optimizely-sdk';

export { createInstance, ReactSDKClient } from './client';

export { default as logOnlyEventDispatcher } from './logOnlyEventDispatcher';
