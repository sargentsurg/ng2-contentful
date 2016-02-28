/**
 *
 */

export module ContentfulTypes {

  // TODO missing space object
  export interface Sys {
    type: string;
    id: string;
    createdAt: string;
    updatedAt: string;
    locale?: string;
    revision: number;
    space?: any;
  }

  export interface IterableResponse<T> {
    sys: Object;
    total: number;
    skip: number;
    limit: number;
    items: Array<T>;
    includes: any;
  }

  export interface Field {
    name: string;
    id: string;
    type: string;
    required: boolean;
    localized: boolean;
  }

  export interface ContentType {
    fields: Array<Field>;
    name: string;
    displayField: string;
    description: string;
    sys: Sys;
  }

  export interface Asset {
    title: string;
    file: {
      contentType: string,
      fileName: string,
      url: string,
      details: {
        size: number
      }
    };
  }

  /**
   * You should use your own models with the custom entries
   */
  export interface Common<T> {
    fields: T;
    sys: Sys;
  }
}













