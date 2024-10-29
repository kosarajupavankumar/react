import React, { useEffect } from 'react';

const WatchListContext = React.createContext();

export const WatchListProvider = ({ children }) => {
    const [watchList, setWatchList] = React.useState([]);

    useEffect(() => {
        const savedWatchList = localStorage.getItem("watchList");
        if (savedWatchList) {
            const watchList = JSON.parse(savedWatchList);
            setWatchList(watchList);
        }
    }, []);


    const addToWatchList = (movie) => {
        setWatchList([...watchList, movie]);
    };

    const removeFromWatchList = (movieId) => {
        setWatchList(watchList.filter(movie => movie.id !== movieId));
    };

    return (
        <WatchListContext.Provider value={{ watchList,setWatchList,  addToWatchList, removeFromWatchList }}>
            {children}
        </WatchListContext.Provider>
    );
};

export default WatchListContext;