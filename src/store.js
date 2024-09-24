import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import commentsReducer from './features/comments/commentsSlice';
import commonReducer from './features/common/commonSlice';
import scrollReducer from './features/scroll/scrollSlice';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedCommentsReducer = persistReducer(persistConfig, commentsReducer);
const persistedCommonReducer = persistReducer(persistConfig, commonReducer);
const persistedScrollReducer = persistReducer(persistConfig, scrollReducer);

export const store = configureStore({
    reducer: {
        comments: persistedCommentsReducer,
        common: persistedCommonReducer,
        scroll: persistedScrollReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
                ignoredPaths: ['register', 'rehydrate'],
            },
        }),
});

export const persistor = persistStore(store);
