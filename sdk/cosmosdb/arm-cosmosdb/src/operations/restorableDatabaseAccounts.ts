/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/restorableDatabaseAccountsMappers";
import * as Parameters from "../models/parameters";
import { CosmosDBManagementClientContext } from "../cosmosDBManagementClientContext";

/** Class representing a RestorableDatabaseAccounts. */
export class RestorableDatabaseAccounts {
  private readonly client: CosmosDBManagementClientContext;

  /**
   * Create a RestorableDatabaseAccounts.
   * @param {CosmosDBManagementClientContext} client Reference to the service client.
   */
  constructor(client: CosmosDBManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists all the restorable Azure Cosmos DB database accounts available under the subscription and
   * in a region.  This call requires
   * 'Microsoft.DocumentDB/locations/restorableDatabaseAccounts/read' permission.
   * @param location Cosmos DB region, with spaces between words and each word capitalized.
   * @param [options] The optional parameters
   * @returns Promise<Models.RestorableDatabaseAccountsListByLocationResponse>
   */
  listByLocation(
    location: string,
    options?: msRest.RequestOptionsBase
  ): Promise<Models.RestorableDatabaseAccountsListByLocationResponse>;
  /**
   * @param location Cosmos DB region, with spaces between words and each word capitalized.
   * @param callback The callback
   */
  listByLocation(
    location: string,
    callback: msRest.ServiceCallback<Models.RestorableDatabaseAccountsListResult>
  ): void;
  /**
   * @param location Cosmos DB region, with spaces between words and each word capitalized.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByLocation(
    location: string,
    options: msRest.RequestOptionsBase,
    callback: msRest.ServiceCallback<Models.RestorableDatabaseAccountsListResult>
  ): void;
  listByLocation(
    location: string,
    options?:
      | msRest.RequestOptionsBase
      | msRest.ServiceCallback<Models.RestorableDatabaseAccountsListResult>,
    callback?: msRest.ServiceCallback<Models.RestorableDatabaseAccountsListResult>
  ): Promise<Models.RestorableDatabaseAccountsListByLocationResponse> {
    return this.client.sendOperationRequest(
      {
        location,
        options
      },
      listByLocationOperationSpec,
      callback
    ) as Promise<Models.RestorableDatabaseAccountsListByLocationResponse>;
  }

  /**
   * Lists all the restorable Azure Cosmos DB database accounts available under the subscription.
   * This call requires 'Microsoft.DocumentDB/locations/restorableDatabaseAccounts/read' permission.
   * @param [options] The optional parameters
   * @returns Promise<Models.RestorableDatabaseAccountsListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.RestorableDatabaseAccountsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.RestorableDatabaseAccountsListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(
    options: msRest.RequestOptionsBase,
    callback: msRest.ServiceCallback<Models.RestorableDatabaseAccountsListResult>
  ): void;
  list(
    options?:
      | msRest.RequestOptionsBase
      | msRest.ServiceCallback<Models.RestorableDatabaseAccountsListResult>,
    callback?: msRest.ServiceCallback<Models.RestorableDatabaseAccountsListResult>
  ): Promise<Models.RestorableDatabaseAccountsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback
    ) as Promise<Models.RestorableDatabaseAccountsListResponse>;
  }

  /**
   * Retrieves the properties of an existing Azure Cosmos DB restorable database account.  This call
   * requires 'Microsoft.DocumentDB/locations/restorableDatabaseAccounts/read/*' permission.
   * @param location Cosmos DB region, with spaces between words and each word capitalized.
   * @param instanceId The instanceId GUID of a restorable database account.
   * @param [options] The optional parameters
   * @returns Promise<Models.RestorableDatabaseAccountsGetByLocationResponse>
   */
  getByLocation(
    location: string,
    instanceId: string,
    options?: msRest.RequestOptionsBase
  ): Promise<Models.RestorableDatabaseAccountsGetByLocationResponse>;
  /**
   * @param location Cosmos DB region, with spaces between words and each word capitalized.
   * @param instanceId The instanceId GUID of a restorable database account.
   * @param callback The callback
   */
  getByLocation(
    location: string,
    instanceId: string,
    callback: msRest.ServiceCallback<Models.RestorableDatabaseAccountGetResult>
  ): void;
  /**
   * @param location Cosmos DB region, with spaces between words and each word capitalized.
   * @param instanceId The instanceId GUID of a restorable database account.
   * @param options The optional parameters
   * @param callback The callback
   */
  getByLocation(
    location: string,
    instanceId: string,
    options: msRest.RequestOptionsBase,
    callback: msRest.ServiceCallback<Models.RestorableDatabaseAccountGetResult>
  ): void;
  getByLocation(
    location: string,
    instanceId: string,
    options?:
      | msRest.RequestOptionsBase
      | msRest.ServiceCallback<Models.RestorableDatabaseAccountGetResult>,
    callback?: msRest.ServiceCallback<Models.RestorableDatabaseAccountGetResult>
  ): Promise<Models.RestorableDatabaseAccountsGetByLocationResponse> {
    return this.client.sendOperationRequest(
      {
        location,
        instanceId,
        options
      },
      getByLocationOperationSpec,
      callback
    ) as Promise<Models.RestorableDatabaseAccountsGetByLocationResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByLocationOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path:
    "subscriptions/{subscriptionId}/providers/Microsoft.DocumentDB/locations/{location}/restorableDatabaseAccounts",
  urlParameters: [Parameters.subscriptionId, Parameters.location],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.acceptLanguage],
  responses: {
    200: {
      bodyMapper: Mappers.RestorableDatabaseAccountsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.DocumentDB/restorableDatabaseAccounts",
  urlParameters: [Parameters.subscriptionId],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.acceptLanguage],
  responses: {
    200: {
      bodyMapper: Mappers.RestorableDatabaseAccountsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getByLocationOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path:
    "subscriptions/{subscriptionId}/providers/Microsoft.DocumentDB/locations/{location}/restorableDatabaseAccounts/{instanceId}",
  urlParameters: [Parameters.subscriptionId, Parameters.location, Parameters.instanceId],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.acceptLanguage],
  responses: {
    200: {
      bodyMapper: Mappers.RestorableDatabaseAccountGetResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};