import React, {useState, useContext} from 'react';
import styled from "styled-components";
import TradeList from './TradeList';

import { GlobalContext } from '../context/GlobalState';
//import { pairs } from 'd3';

const CSS = styled.div`
  background: #3d3d4a;
  color: #898996;
  display:flex;

  padding: 1%;
  margin: 0% 0% 1% 0%;

  .settings{
    font-size: 16px;
    padding: 1%;
    width: 25%;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  }
  .results-overview{
    padding: 1%;
    width: 24%;
    font-size: 16px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    margin: 0% 1%;
  }
  .list-of-trades{
    padding:1%;
    width: 50%;
    font-size: 16px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;

  }


  h4{
    font-size: 180%;
    border-bottom: 4px solid #898996;
  }



  /* left card CSS begin */
  .input-flex{
    display:flex;
    border: none;
    border-bottom: 2px solid #6464a3;
    background: transparent;//#eff1f2;
    color: #dedfe4;
    width: 75%;
    height: 2rem;
    font-size: 16px;
    padding-left: 0.5rem;
    padding-top: 0.325rem;
    padding-bottom: 0.325rem;
    margin-bottom: 0.425rem;
    
    &:focus, &:hover{
      outline: none;
      color: #373641;
      ::placeholder{
        color: #898996;
      }
      background: #dedfe4;
    }
    ::placeholder{
      color: #dedfe4;
    }
  }

  .input-inline{
    display:inline;
    border: none;
    border-bottom: 2px solid #6464a3;
    background: transparent;//#eff1f2;
    color: #dedfe4;
    width:10%;
    height: 2rem;
    font-size: 16px;
    padding-left: 0.5rem;
    padding-top: 0.325rem;
    padding-bottom: 0.325rem;
    margin-bottom: 0.425rem;
    
    &:focus, &:hover{
      outline: none;
      color: #373641;
      ::placeholder{
        color: #898996;
      }
      background: #dedfe4;
    }
    ::placeholder{
      color: #dedfe4;
    }
  }

  .input-label{
    color: #898996;
    font-size: 14px;
  }

  .input-label-sub{
    color: #898996;
    font-style: italic;
    font-size: 80%;
    padding-left: 5%;
    margin-bottom: 2%;
  }

  .input-select {
    display:flex;
    width: 75%;
    color: #dedfe4;
    border: none;
    border-bottom: 2px solid #6464a3;
    background: transparent;
    height: 2rem;
    font-size: 16px;
    padding-left: 0.5rem;
    margin-bottom: 0.425rem;

    &:focus, &:hover{
      outline: none;
      color: #373641;
      background: #dedfe4;
    }
  }


  .calc-button {
    display: block;
    cursor: pointer;
    outline: none;
    border: none;
    background-color: #dedfe4;
    width: 200px;
    height: 35px;
    border-radius: 30px;
    font-size: 18px;
    font-weight: 600;
    color: #373641;
    background-size: 100% 100%;
    box-shadow: 0 0 0 1px black inset;
    margin: 1%;
    margin-top: 3%;

    @media only screen and (max-width: 968px) {
      width: auto;
    }
  }
  
  .calc-button:hover {
    background-image: linear-gradient(
      145deg,
      transparent 10%,
      #89d47f 10% 20%,
      transparent 20% 30%,
      #89d47f 30% 40%,
      transparent 40% 50%,
      #89d47f 50% 60%,
      transparent 60% 70%,
      #89d47f 70% 80%,
      transparent 80% 90%,
      #89d47f 90% 100%
    );
    animation: background 6s linear infinite;


    @media only screen and (max-width: 968px) {
      width: auto;
      color: #52515c;
      background-color: #ebebeb;
      background-image: none;
    }
  }

  .del-button {
    display: block;
    cursor: pointer;
    outline: none;
    border: none;
    background-color: #dedfe4;
    width: 200px;
    height: 35px;
    border-radius: 30px;
    font-size: 18px;
    font-weight: 600;
    color: #373641;
    background-size: 100% 100%;
    box-shadow: 0 0 0 1px black inset;
    margin: 1%;
    
    margin-top: 3%;@media only screen and (max-width: 968px) {
      width: auto;
    }
  }
  
  .del-button:hover {
    background-image: linear-gradient(
      145deg,
      transparent 10%,
      #d4847f 10% 20%,
      transparent 20% 30%,
      #d4847f 30% 40%,
      transparent 40% 50%,
      #d4847f 50% 60%,
      transparent 60% 70%,
      #d4847f 70% 80%,
      transparent 80% 90%,
      #d4847f 90% 100%
    );
    animation: background 6s linear infinite;
    @media only screen and (max-width: 968px) {
      width: auto;
      color: #52515c;
      background-color: #ebebeb;
      background-image: none;
    }
  }
  
  @keyframes background {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 400px 0;
    }
  }
  /* left card CSS end */
  /* middle card CSS begin */
  .result-item{
    border-bottom: 2px solid #6464a3;
    height: auto;
    margin-bottom: 4%;
    padding-bottom: 1%;
  }
  .result-title{
    text-align: left;
    color: #898996;
    font-size: 14px;
    width: 50%;
  }
  .result-output{
    text-align: right;
    color: #dedfe4;
    font-size: 16px;
    width: 50%;
  }

  /* middle card CSS end */
  /* right card CSS begin */
  .trades-scroll{
    font-size: 12px;
    background-color: #373641;
    padding: 1% 3%;
    width:auto;
    overflow-y:auto;
    overflow-x:clip;
    height: 750px;
  }

  /* right card CSS end */

`;

export const Backtest = ({ backtest }) => {

  const defaultTimePeriod = () => {
    switch(backtest.indicator){
      case 'RSI': return 14;
      case 'EMA': return 9;
      case 'SMA': return 9;
      case 'BB': return 20;
      default: return 24;
    }
  }
  const defaultBuyStrat = () => {
    switch(backtest.indicator){
      case 'RSI': return 30;
      case 'EMA': return -3;
      case 'SMA': return -3;
      case 'BB': return -3;
      default: return -3;
    }
  }

  // Returns today date in YYYY-MM-DD formate
  const getTodayDate = () => {
    return new Date().toISOString().slice(0, 10);
  }

  // Returns 100 years ago today date in YYYY-MM-DD formate
  const getOldDate = () => {
    let myDate = new Date(new Date().setFullYear(new Date().getFullYear() - 100));
    return myDate.toISOString().slice(0, 10);
  }
  

  const [tradeListData, setTradeListData] = useState([]);

  const [seriesType, setSeriesType] = useState('1. open');
  const [timePeriod, setTimePeriod] = useState(defaultTimePeriod());
  const [stdDeviation, setStdDeviation] = useState(2);
  const [startDate, setStartDate] = useState(getOldDate());
  const [endDate, setEndDate] = useState(getTodayDate());

  const [maxBags, setMaxBags] = useState(5);
  const [initalBalance, setInitialBalance] = useState(10000);
  const [initalBuyType, setInitalBuyType] = useState('usd');
  const [initalBuyAmount, setInitalBuyAmount] = useState(1500);
  const [buyStrategyValue, setBuyStrategyValue] = useState(defaultBuyStrat());
  const [buyStrategyType, setBuyStrategyType] = useState('Real Middle Band'); // Used for Bollinger upper/middle/lower
  const [sellStrategyValue, setSellStrategyValue] = useState(1);

  const { deleteBacktest, current_symbol, cache_TSDA, cache_TSDA_function } = useContext(GlobalContext);

  // Used for JSX dropdown items
  const dropdownItems = (items) => {
    return items.map(item => <option value={item.value} key={item.name}>{item.name}</option>);
  }

  // Calculates USD value for creating a bag
  function calcInitalBuy(buyType, buyAmount, currentBalance, curStockPrice) {
    switch(buyType){
      case "numStocks":
        return curStockPrice*buyAmount;
      case "percent":
        return currentBalance * (buyAmount/100.00);
      default:
        // case "usd":
        return buyAmount;

    }
  }

  // Function to return true/false for buy condition, given price and indicator values
  function isBuyConditionMet(buyStrategyValue, curStockPrice, curIndicatorValue) {
    switch(backtest.indicator){
      case "RSI":
        return curIndicatorValue < buyStrategyValue;
      default:
        // case EMA, SMA, BB (all cases where indicator is a price of stock)
        return curStockPrice <= (curIndicatorValue * ((100.0 + buyStrategyValue)/100.0))
    }
  }

  // Returns JSON name of element for indicator item
  function getIndicatorJSON() {
    switch(backtest.indicator){
      case "BBANDS":
        return buyStrategyType;
      default:
        return backtest.indicator;

    }
  }

  // Finalizes trade, storing buy/sell data into backtest.tradeListData
  function finalizeTrade(myBag, buyDate, sellDate, candleCountSell, sellPrice, curIndicatorValue, numShares) {
    const percentChange = (sellPrice/myBag["buy-price"]);
    const profitUSD = +(percentChange-1)*myBag["volume-USD"];
    const candleLength = +candleCountSell-myBag["candle-count-buy"];
    
    // Push on individual trade data
    (backtest.tradeListData).push({
      buyDate,
      sellDate,
      buyPrice: myBag["buy-price"],
      sellPrice,
      numShares,
      profitPercent: +percentChange-1,
      profitUSD,
      candleLength,
      indicatorAtSell: curIndicatorValue,
      indicatorAtBuy: myBag["indicator-at-buy"]
    });

    // Update results Overview data
    backtest.numTrades++;
    backtest.profitUSD += profitUSD;
    backtest.netBars += candleLength;
    backtest.netSellVolume += sellPrice * numShares;

    //console.log("finalizeTrade called, % change:", percentChange, buyDate, sellDate);
  }

  // Runs user specified backtest algorithms and prepares outputs/trades to display
  async function runBacktests(paperAPICall, pairSettings) {
    let stockPriceData;
    let stockIndicatorData;
    let response;

    // Ensure user has selected a stock
    if(!current_symbol){
      alert("Please select a stock to test your strategy on.");
      return;
    }
    
    // Ensure API json for cache_TSDA exists
    if(!cache_TSDA['Meta Data']){
      response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${current_symbol}&outputsize=full&apikey=CQ5JZQYM4DG0OODA`);
      stockPriceData = await response.json();
      cache_TSDA_function(stockPriceData);

      // Stop if MAX API
      if(stockPriceData.Note) return;
    }else{
      stockPriceData = cache_TSDA;
    }

    // Make API call for stockIndicatorData
    let optionalParameters;
    switch(backtest.indicator){
      case 'BBANDS':
        optionalParameters = `&nbdevup=${pairSettings.stdDeviation}&nbdevdn=${pairSettings.stdDeviation}`;
        break;
      default:
        optionalParameters = '';
    }
    response = await fetch(`https://www.alphavantage.co/query?function=${backtest.indicator}&symbol=${current_symbol}&interval=daily&time_period=${paperAPICall.timePeriod}&series_type=${paperAPICall.seriesType}${optionalParameters}&apikey=CQ5JZQYM4DG0OODA`);
    stockIndicatorData = await response.json();
    // Catches MAX API
    if(stockIndicatorData.Note){
      alert("MAX API CALLS. Please wait a minute for more. Thank you for visitng my project! However, it was built using Alpha Vantage's standard API where the call frequency is 5 calls per minute and 500 calls per day.");
      return;
    }

    // Initalize bags/candle-count/currentBalance
    let candleCount = 0;
    let bagList = {};
    bagList.length = 0;
    let currentBalance = pairSettings.initalBalance;
    let startDateReached = false;
    // Initalize single integer to know lowest price I consider selling at(updated when new bags are added)
    let lowestSellPrice = 0;
    // Main loop that runs the paper trading bot algo, maintains bags/buys/sells/etc throughout 5 years (1265 trading days)
    // Note: in the following for loop: key == date
    for(let [key] of Object.entries(stockIndicatorData[`Technical Analysis: ${backtest.indicator}`]).reverse()){
      // Enables iterator code to run once start date reached/passed
      if(key>=startDate){
        startDateReached = true;
      }
      // Skips iterator because start date not reached
      if(startDateReached === false){
        continue;
      }else if(key===endDate){
        // End date reached... so stop iterating.
        break;
      }

      // Count Candles interated over
      candleCount++;
      
      // Skip days where no price exists
      if(!stockPriceData["Time Series (Daily)"][`${key}`]) continue;
      // Essential values for iterating stock data
      let curIndicatorValue = +stockIndicatorData[`Technical Analysis: ${backtest.indicator}`][`${key}`][`${getIndicatorJSON()}`];
      let curStockPrice = +stockPriceData["Time Series (Daily)"][`${key}`][`${paperAPICall.seriesType}`];

      // First price of start date
      if(!backtest.startPrice){
        backtest.startPrice = curStockPrice;
      }
      // Maintain oldest price
      backtest.endPrice = curStockPrice;    

      // Prospective USD to create a new bag
      const newBagVolume = calcInitalBuy(pairSettings.initalBuyType, pairSettings.initalBuyAmount, currentBalance, curStockPrice);

      // If Buy condition: Bags open, balance sufficient, price meets indicator limit
      if(bagList.length<pairSettings.maxBags && newBagVolume <= currentBalance && isBuyConditionMet(pairSettings.buyStrategyValue, curStockPrice, curIndicatorValue)){
        // Create and add bag to bagList, increment bagList.length. Automatically added by creating key.
        bagList.length++;
        console.log("bag added");
        bagList[`${key}`] = {
          "sell-price-limit": +(1+(pairSettings.sellStrategyValue/100)) * curStockPrice,
          "buy-price": +curStockPrice,
          "candle-count-buy": +candleCount,
          "volume-USD": +newBagVolume,
          "num-shares": +newBagVolume/curStockPrice,
          "indicator-at-buy": curIndicatorValue
        }

        // Update currentBalance
        currentBalance -= bagList[`${key}`]["volume-USD"];

        // Update lowestSellPrice, min of current lowest, or new buy price is lower. Initialize if only 1 bag.
        if(bagList.length===1){
          lowestSellPrice = +bagList[`${key}`]["sell-price-limit"];
        }else{
          lowestSellPrice = Math.min(lowestSellPrice, bagList[`${key}`]["sell-price-limit"]);
        }
      // Else If Sell Condition
      }else if(curStockPrice>= lowestSellPrice && bagList.length>0){
        // Store key of buy date(below loop has new key in smaller scope)
        let sellDate = key;
        for(let [key] of Object.entries(bagList)){ 
          if(curStockPrice >= bagList[`${key}`]["sell-price-limit"]){
            // Finalize Trade function records trade data into backtest to display in JSX below
            finalizeTrade(bagList[`${key}`], key, sellDate, candleCount, curStockPrice, curIndicatorValue, bagList[`${key}`]["num-shares"], bagList[`${key}`]["indicator-at-buy"]);
            delete bagList[`${key}`];
            bagList.length--;
          }
        }

        // If bags exist, update to new lowest price
        const newBagListKeys = Object.entries(bagList);
        if(newBagListKeys[0][1]>0){
          lowestSellPrice = bagList[newBagListKeys[1][0]]["sell-price-limit"];
          for(let [key] of newBagListKeys){ 
            lowestSellPrice = Math.min(lowestSellPrice, +bagList[`${key}`]["sell-price-limit"]);
          }
        }
      }
      // End of Buy/Sell conditions
    }
    
    console.log("iterating done", backtest, startDate, endDate, backtest.holdReturn);
    // Iterating complete, finalize some data on compelted backtest algorithm
    backtest.holdReturn = (((backtest.endPrice / backtest.startPrice)-1) * 100).toFixed(2);
    console.log("set holdret", backtest.holdReturn, "end/start", backtest.endPrice, backtest.startPrice);
    delete backtest.startPrice;
    backtest.profitPercentOnBalance = backtest.profitUSD / pairSettings.initalBalance;
    backtest.profitPercentOnTrades = backtest.profitUSD / (backtest.netSellVolume - backtest.profitUSD);
    backtest.avgBars = backtest.netBars / backtest.numTrades;
    
    // Update results display and sends tradeListData to TradeList.js in JSX below
    setTradeListData(backtest.tradeListData);
  }

  const onSubmit = () => {
    backtest.current_symbol = current_symbol;

    const paperAPICall = { 
      // Relavent variables that are global: current_symbol, interval(daily), backtest.indicator(ex, RSI)
      seriesType: seriesType,
      timePeriod: +timePeriod,
      stdDeviation: +stdDeviation
    };

    const pairSettings = {
      maxBags: +maxBags,
      initalBalance: +initalBalance,
      initalBuyType: initalBuyType,
      initalBuyAmount: +initalBuyAmount,
      buyStrategyValue: +buyStrategyValue,
      buyStrategyType, // used for Bollinger upper/middle/lower
      sellStrategyValue: +sellStrategyValue
    }

    // Ensure no trivial strategies are submitted
    if(pairSettings.maxBags<1 || pairSettings.initalBalance<1 || pairSettings.initalBuyAmount<1 || pairSettings.sellStrategyValue<0 || paperAPICall.timePeriod<1){
      // Bags, balance, timeperiod, buy amount, sell gain% must be positive
      alert("Please enter valid inputs. Use positive integers for the following: Max bags, Sell percentage, Time period, Buy amount, Inital Balance.");
    }else if(pairSettings.initalBuyType==='percent' && (pairSettings.initalBuyAmount<1 || pairSettings.initalBuyAmount>100)){
      // if(buy type is percent) buy amount must be (0-100]
      alert("Buy amount percentage must be 1-100%");
    }else if (pairSettings.initalBuyAmount>pairSettings.initalBalance){
      // inital buy must be < inital balance
      alert("Inital buys must be less than or equal to inital balance.");
    }else if(backtest.indicator==='RSI' && (pairSettings.buyStrategyValue<1 || pairSettings.buyStrategyValue>99)){
      // Ensure no trivial strategy specific settings are submitted <connect to previous if chain thing>
      alert("RSI values must be between 1-99");
    }else if(backtest.indicator==='BBANDS' && paperAPICall.stdDeviation<0.5){
      // Ensure no trivial BB std deviation
      alert("Standard Deviation must be greater than or equal to 0.5.");
    }else{
      // Calculation inputs valid
      console.log(pairSettings);

      // Initialize Trade List Data(for final results)
      backtest.tradeListData = [];
      backtest.profitUSD = 0;
      backtest.numTrades = 0;
      backtest.netBars = 0;
      backtest.netSellVolume = 0; // Net volume USD sold

      // Run backtest algorithm
      runBacktests(paperAPICall, pairSettings);
    }

  }

  let indicatorSettingDOM = null;
  switch(backtest.indicator){
    case 'RSI':
      indicatorSettingDOM = (<> 
        {/* Time Period(# candles in calc) */}
          <label className="input-label" >Time Period:</label>
          <input className="input-flex" placeholder='14' onChange={(e) => setTimePeriod(e.target.value)} />
      </>);
      break;
    case 'EMA':
      indicatorSettingDOM = (<> 
        {/* Time Period(# candles in calc) */}
        <label className="input-label">Time Period: </label>
        <input className="input-flex" placeholder="9" onChange={(e) => setTimePeriod(e.target.value)} />
      </>);
      break;
    case 'SMA':
      indicatorSettingDOM = (<> 
        {/* Time Period(# candles in calc) */}
        <label className="input-label">Time Period:</label>
        <input className="input-flex" placeholder="9" onChange={(e) => setTimePeriod(e.target.value)} />
      </>);
      break;
    case 'BBANDS':
      indicatorSettingDOM = (<> 
        {/* Time Period(# candles in calc) */}
        <label className="input-label">Time Period: </label>
        <input className="input-flex" placeholder="20" onChange={(e) => setTimePeriod(e.target.value)} />

        {/* Standard deviation for both top/bot lines */}
        <label className="input-label">Standard Deviation for upper/lower lines:</label>
        <input className="input-flex" placeholder="2" onChange={(e) => setStdDeviation(e.target.value)} />
      </>);
      break;
    default:
      indicatorSettingDOM = (<div>Default backtest indicator DOM</div>);
    
  }

  let buyStrategyDOM = null;
  switch(backtest.indicator){
    case 'RSI':
      buyStrategyDOM = (<> 
        {/* Buy Strategy RSI */}
        <label className="input-label">Buy when RSI less than</label>
        <input className="input-inline" placeholder='30' onChange={(e) => setBuyStrategyValue(e.target.value)} />
        <br/>
      </>);
      break;
    case 'EMA':
      buyStrategyDOM = (<> 
        {/* Buy strategy % away */}
        <label className="input-label">Buy at price</label>
        <input className="input-inline" placeholder="-3" onChange={(e) => setBuyStrategyValue(e.target.value)}/>
        <label className="input-label">% away from the EMA line. </label>
        <label className="input-label-sub">(3 = 3% above, -3 = 3% below)</label>
        <br/>
      </>);
      break;
    case 'SMA':
      buyStrategyDOM = (<> 
        {/* Buy strategy % away */}
        <label className="input-label">Buy at price</label>
        <input className="input-inline" placeholder="-3" onChange={(e) => setBuyStrategyValue(e.target.value)}/>
        <label className="input-label">% away from the SMA line. </label>
        <label className="input-label-sub">(3 = 3% above, -3 = 3% below)</label>
        <br/>
      </>);
      break;
    case 'BBANDS':
      buyStrategyDOM = (<> 
        {/* Buy strategy % away (BB) */}
        <label className="input-label">Band to follow:</label>
        <select className="input-select" onChange={(e) => setBuyStrategyType(e.target.value)}>
          {dropdownItems([
            {name:'Middle', value:'Real Middle Band'},
            {name:'Upper', value:'Real Upper Band'},
            {name:'Lower', value:'Real Lower Band'}
          ])}
        </select>
        
        <label className="input-label">Buy at price</label>
        <input className="input-inline" placeholder="-3" onChange={(e) => setBuyStrategyValue(e.target.value)}/>
        <label className="input-label">% away from the selected line. </label>
        <label className="input-label-sub">(3 = 3% above, -3 = 3% below)</label>
        <br/>
      </>);
      break;
    default:
      buyStrategyDOM = (<div>buy strat dom default</div>);
    
  }

  return (
    <CSS>
      <div className='settings'>
        {/* Beginning of Settings */}
        <h4>{backtest.indicator} Settings</h4>

        {/* series type */}
        <label className="input-label">Select Series Type:</label>
        <select className="input-select" onChange={(e) => setSeriesType(e.target.value)}>
          {dropdownItems([
            {name:'open', value:'1. open'},
            {name:'close', value:'4. close'},
            {name:'high', value:'2. high'},
            {name:'low', value:'3. low'}])}
        </select>
        
        {indicatorSettingDOM}

        <br/>

        <h4>Trading Strategy Settings</h4>

        {/* Begin date for backtest */}
        <label className="input-label">Start Date:</label>
        <input className="input-flex" type="date" value={getOldDate()} onChange={(e) => setStartDate(e.target.value)} />

        {/* End date for backtest */}
        <label className="input-label">End Date:</label>
        <input className="input-flex" type="date" value={getTodayDate()} onChange={(e) => setEndDate(e.target.value)} />
              
        {/* Max number bags */}
        <label className="input-label">Max number of bags:</label>
        <input className="input-flex" placeholder="5" onChange={(e) => setMaxBags(e.target.value)} />

        {/* Inital balance */}
        <label className="input-label">Inital balance (USD):</label>
        <input className="input-flex" min="0" placeholder="10000" onChange={(e) => setInitialBalance(e.target.value)} />

        {/* Inital buy (type/amount) */}
        <label className="input-label">Inital buy type:</label>
        <select className="input-select" onChange={(e) => setInitalBuyType(e.target.value)}>
          {dropdownItems([
            {name:'($) USD', value:'usd'},
            {name:'(%) Percent of Balance', value:'percent'},
            {name:'(#) Number of Stocks', value:'numStocks'}
          ])}
        </select>

        <label className="input-label">Inital buy amount:</label>
        <input className="input-flex" min="0" placeholder="1500" onChange={(e) => setInitalBuyAmount(e.target.value)} />

        {buyStrategyDOM}

        {/* Sell Strategy */}
        <label className="input-label">Sell bags at</label>
        <input className="input-inline" placeholder="1" onChange={(e) => setSellStrategyValue(e.target.value)} />
        <label className="input-label">% profit.</label>
        <br/>

        {/* submit button */}
        <button className="calc-button" onClick={() => onSubmit()}>Calculate</button>


        {/* close button */}
        <button className="del-button" onClick={() => deleteBacktest(backtest.id)} >Delete</button>
      </div>
      {/* end of settings, beginning of results overview */}

      <div className='results-overview'>
        <h4>Performance Overview {backtest.current_symbol?"("+backtest.current_symbol+")":""}</h4>
        <div className="result-item">
          <label className="result-title">Profit USD:</label>
          <label className="result-output">${(backtest.profitUSD?backtest.profitUSD:0).toFixed(2)}</label>
        </div>
        <div className="result-item">
          <label className="result-title">Profit Percent on Entire Balance: </label>
          <label className="result-output">{(backtest.profitPercentOnBalance ? 100*backtest.profitPercentOnBalance : 0).toFixed(2)}%</label>
        </div>
        <div className="result-item">
          <label className="result-title">Average profit per trade: </label>
          <label className="result-output"> {(backtest.profitPercentOnTrades?100*backtest.profitPercentOnTrades:0).toFixed(2)}%</label>
        </div>
        <div className="result-item">
          <label className="result-title">Number of trades: </label>
          <label className="result-output">{backtest.numTrades? backtest.numTrades:0}</label>
        </div>
        <div className="result-item">
          <label className="result-title">Average bars per trade: </label>
          <label className="result-output">{(backtest.avgBars?backtest.avgBars:0).toFixed(2)}</label>
        </div>
        <div className="result-item">
          <label className="result-title">Buy and hold return: </label>
          <label className="result-output">{backtest.holdReturn>0?"+":""}{backtest.holdReturn?backtest.holdReturn:"0"}%</label>
        </div>
      </div>
      
      {/* End of results overview, begin list of trades */}

      <div className='list-of-trades'>
        <h4>List Of Trades</h4>
        <div className="trades-scroll">
          <TradeList tradeList={tradeListData.map(tradeData => tradeData)}/>
        </div>
      </div>
      
      {/* End list of trades */}
    </CSS>
  );
}
