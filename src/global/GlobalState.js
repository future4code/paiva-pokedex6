import React, { useContext, useState } from 'react'
import { GlobalStateContext } from './GlobalStateContext'
import useGetPokemonList from '../hooks/useGetPokemonList'

export const GlobalState = (props) => {

    const { pokemonList, loading, error } = useGetPokemonList()

    const states = { pokemonList, loading, error };

    return (
        <GlobalStateContext.Provider value={{ states }}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export const useGlobal = () => {
    return useContext(GlobalStateContext);
};

export const useGlobalStates = () => {
    const { states } = useGlobal();
    return states;
};

export const useGlobalSetters = () => {
    const { setters } = useGlobal();
    return setters;
};

export const useGlobalRequests = () => {
    const { requests } = useGlobal();
    return requests;
};





