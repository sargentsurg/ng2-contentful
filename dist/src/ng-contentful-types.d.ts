/**
 *
 */
export declare module ContentfulTypes {
    interface Sys {
        type: string;
        id: string;
        createdAt: string;
        updatedAt: string;
        locale?: string;
        revision: number;
        space?: any;
    }
    interface IterableResponse<T> {
        sys: Object;
        total: number;
        skip: number;
        limit: number;
        items: Array<T>;
    }
    interface Field {
        name: string;
        id: string;
        type: string;
        required: boolean;
        localized: boolean;
    }
    interface ContentType {
        fields: Array<Field>;
        name: string;
        displayField: string;
        description: string;
        sys: Sys;
    }
    interface Asset {
        title: string;
        file: {
            contentType: string;
            fileName: string;
            url: string;
            details: {
                size: number;
            };
        };
    }
    /**
     * You should use your own models with the custom entries
     */
    interface Common<T> {
        fields: T;
        sys: Sys;
    }
}
