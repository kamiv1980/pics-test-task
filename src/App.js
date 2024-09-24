import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store, persistor } from './store';
import { Layout } from './app/layouts/default';
import { setScrollPosition } from './features/scroll/scrollSlice';

const Comments = lazy(() => import('./app/pages/comments'));
const NoMatch = lazy(() => import('./app/pages/nomatch'));

function App() {
    const dispatch = useDispatch();
    const scrollPosition = useSelector((state) => state.scroll.scrollPosition);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!loading) {
            window.scrollTo(0, scrollPosition);
        }
    }, [loading, scrollPosition]);

    useEffect(() => {
        // Simulate data fetching
        const loadData = async () => {
            await new Promise(resolve => setTimeout(resolve, 100));
            setLoading(false);
        };
        loadData();
    }, []);

    const handleScroll = () => {
        dispatch(setScrollPosition(window.scrollY));
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            <Route path="/" element={<Layout />}>
                                <Route index element={<Comments />} />
                                <Route path="*" element={<NoMatch />} />
                            </Route>
                        </Routes>
                    </Suspense>
                </Router>
            </PersistGate>
        </Provider>
    );
}

export default App;
