/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import { GeneratedClientOptionalParams } from "./models";

/** @internal */
export class GeneratedClientContext extends coreClient.ServiceClient {
  endpoint: string;

  /**
   * Initializes a new instance of the GeneratedClientContext class.
   * @param endpoint Supported Cognitive Services endpoints (protocol and hostname, for example:
   *                 https://westus.api.cognitive.microsoft.com).
   * @param options The parameter options
   */
  constructor(endpoint: string, options?: GeneratedClientOptionalParams) {
    if (endpoint === undefined) {
      throw new Error("'endpoint' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }

    const defaults: GeneratedClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      baseUri: options.endpoint || "{Endpoint}/text/analytics/v3.1-preview.5"
    };

    super(optionsWithDefaults);
    // Parameter assignments
    this.endpoint = endpoint;
  }
}
