import { AtomGeneratorOptions, atomStateGenerator } from "@gaddario98/react-state";
declare const storage: {
    getItem: (key: string) => Promise<string | null>;
    setItem: (key: string, value: string) => Promise<void>;
    removeItem: (key: string) => Promise<void>;
};
export declare const setReactNativeStorage: () => void;
export { type AtomGeneratorOptions, atomStateGenerator, storage };
