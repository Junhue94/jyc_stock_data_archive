import _ from 'lodash';

/**
 * Stock Mock Result
 * For Mock API Calls and Unit Tests
 */
export const CREATE_STOCK = {
    _id: '1',
    type: 'Current',
    entryDate: new Date(2017, 4, 15),
    exitDate: null,
    name: 'UOB',
    sector: 'Banking',
    country: 'SG',
    currency: 'S$',
    priceBuy: 10.5,
    priceSell: null,
    priceProfitTarget: 15.2,
    priceStopLoss: 10.1,
    quantityBuy: 500,
    quantitySell: null,
    totalDividend: 50.25,
    totalCapital: 1250.50,
    capitalReturn: null,
    createdAt: 1535000034034,
    updatedAt: 1535034034034,
    deleted: false
};

export const GET_STOCK = {
    _id: '2',
    type: 'Watchlist',
    entryDate: new Date(2018, 8, 26),
    exitDate: null,
    name: 'ST Engineering',
    sector: 'Technology',
    country: 'SG',
    currency: 'S$',
    priceBuy: 5.67,
    priceSell: null,
    priceProfitTarget: 6.78,
    priceStopLoss: null,
    quantityBuy: 1400,
    quantitySell: null,
    totalDividend: null,
    totalCapital: null,
    capitalReturn: null,
    createdAt: 1535078034034,
    updatedAt: null,
    deleted: false
};

export const UPDATE_STOCK = {
    _id: '3',
    type: 'Exited',
    entryDate: new Date(2016, 7, 29),
    exitDate: new Date(2017, 6, 12),
    name: 'Razer',
    sector: 'Technology',
    country: 'HK',
    currency: 'HKD',
    priceBuy: 20.91,
    priceSell: 10.92,
    priceProfitTarget: null,
    priceStopLoss: null,
    quantityBuy: 40000,
    quantitySell: 40000,
    totalDividend: null,
    totalCapital: 50802,
    capitalReturn: -10902.04,
    createdAt: 1535078034034,
    updatedAt: 1535090135034,
    deleted: false
};

export const DELETE_STOCK = {
    _id: '4',
    type: 'Partial Exit',
    entryDate: new Date(2017, 0, 17),
    exitDate: new Date(2017, 1, 9),
    name: 'Kulim',
    sector: 'Consumer Discretionary',
    country: 'MY',
    currency: 'RM',
    priceBuy: 2.43,
    priceSell: 5.32,
    priceProfitTarget: 5.0,
    priceStopLoss: 1.23,
    quantityBuy: 2300,
    quantitySell: 1200,
    totalDividend: 50.32,
    totalCapital: 6000,
    capitalReturn: 3210.90,
    createdAt: 1535128034034,
    updatedAt: 1535530135034,
    deleted: true
};

export const FIND_STOCK_LIST = params => {
    const { offset = 50, currentPage = 1, sortField, sortSeq } = params;
    let data = [
        {
            _id: '1',
            type: 'Current',
            entryDate: new Date(2017, 4, 14),
            exitDate: null,
            name: 'UOB',
            sector: 'Banking',
            country: 'SG',
            currency: 'S$',
            priceBuy: 10.5,
            priceSell: null,
            priceProfitTarget: 15.2,
            priceStopLoss: 10.1,
            quantityBuy: 500,
            quantitySell: null,
            totalDividend: 50.25,
            totalCapital: 1250.50,
            capitalReturn: null,
            createdAt: 1535000034034,
            updatedAt: 1535034034034,
            deleted: false
        },
        {
            _id: '2',
            type: 'Watchlist',
            entryDate: null,
            exitDate: null,
            name: 'ST Engineering',
            sector: 'Technology',
            country: 'SG',
            currency: 'S$',
            priceBuy: 5.67,
            priceSell: null,
            priceProfitTarget: 6.78,
            priceStopLoss: null,
            quantityBuy: 1400,
            quantitySell: null,
            totalDividend: null,
            totalCapital: null,
            capitalReturn: null,
            createdAt: 1535078034034,
            updatedAt: null,
            deleted: false
        },
        {
            _id: '3',
            type: 'Exited',
            entryDate: new Date(2016, 7, 29),
            exitDate: new Date(2017, 6, 12),
            name: 'Razer',
            sector: 'Technology',
            country: 'HK',
            currency: 'HKD',
            priceBuy: 20.91,
            priceSell: 10.92,
            priceProfitTarget: null,
            priceStopLoss: null,
            quantityBuy: 40000,
            quantitySell: 40000,
            totalDividend: null,
            totalCapital: 50802,
            capitalReturn: -10902.04,
            createdAt: 1535078034034,
            updatedAt: 1535090135034,
            deleted: false
        },
        {
            _id: '4',
            type: 'Partial Exit',
            entryDate: new Date(2017, 0, 19),
            exitDate: new Date(2017, 1, 9),
            name: 'Kulim',
            sector: 'Consumer Discretionary',
            country: 'MY',
            currency: 'RM',
            priceBuy: 2.43,
            priceSell: 5.32,
            priceProfitTarget: 5.0,
            priceStopLoss: 1.23,
            quantityBuy: 2300,
            quantitySell: 1200,
            totalDividend: 50.32,
            totalCapital: 6000,
            capitalReturn: 3210.90,
            createdAt: 1535128034034,
            updatedAt: 1535530135034,
            deleted: false
        },
        {
            _id: '5',
            type: 'Current',
            entryDate: new Date(2017, 2, 3),
            exitDate: null,
            name: 'YZJ',
            sector: 'Energy',
            country: 'SG',
            currency: 'S$',
            priceBuy: 56.5,
            priceSell: null,
            priceProfitTarget: 78.2,
            priceStopLoss: 23.1,
            quantityBuy: 900,
            quantitySell: null,
            totalDividend: null,
            totalCapital: 67294.20,
            capitalReturn: null,
            createdAt: 1535000034034,
            updatedAt: 1535034034034,
            deleted: false
        },
        {
            _id: '6',
            type: 'Sold',
            entryDate: new Date(2017, 8, 9),
            exitDate: new Date(2018, 0, 19),
            name: 'Blumont',
            sector: 'Energy',
            country: 'SG',
            currency: 'S$',
            priceBuy: 0.209,
            priceSell: 0.309,
            priceProfitTarget: null,
            priceStopLoss: null,
            quantityBuy: 59000,
            quantitySell: 59000,
            totalDividend: null,
            totalCapital: 38042.20,
            capitalReturn: 1902.42,
            createdAt: 1535000034034,
            updatedAt: 1535034034034,
            deleted: false
        }
    ];
    
    if (sortField && sortSeq) {
        data = _.orderBy(data, [sortField], [sortSeq]);
    }
    
    return {
        offset,
        currentPage,
        totalRows: 250,
        totalPage: 5,
        data
    };
};