<template>
    <h4> (Created a component for retreiving the posts from database here) </h4>

  <!--   <h1 id="Current">Current portfolio</h1>
  <table id="table" class="auto-index">
    <tr>
      <th>S.No</th>
      <th>Coin</th>
      <th>Ticker</th>
      <th>Buy_Price</th>
      <th>Buy_Quantity</th>
      <th>Current_Price</th>
      <th>Profit</th>
      <th>Options</th>
    </tr>
    <tr v-for="(row, index) in tableRows" :key="row.coin">
      <td>{{ index + 1 }}</td>
      <td>{{ row.coin }}</td>
      <td>{{ row.ticker }}</td>
      <td>{{ row.buyPrice }}</td>
      <td>{{ row.buyQuantity }}</td>
      <td>{{ row.currentPrice }}</td>
      <td>{{ row.profit }}</td>
      <td>
        <button @click="deleteInstrument(row.coin, useremail)" class="bwt">Delete</button>
      </td>
    </tr>
  </table><br><br>
  <h2 id="totalProfit"> Total Profit is : {{ totalProfit }} </h2> -->
</template>

<script>
/* import firebaseApp from "../firebase.js"
import {getFirestore} from "firebase/firestore"
import {collection, getDocs, doc, deleteDoc} from "firebase/firestore"
import ccxt from "ccxt"
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const db = getFirestore(firebaseApp);


export default {
    data() {
        return {
            useremail:'',
            tableRows: [],
            totalProfit: 0,
        };
    },

    async mounted(){
        const auth = getAuth();
        this.useremail = auth.currentUser.email;
        await this.fetchAndUpdateData(this.useremail);
    },

    methods: {
        async fetchAndUpdateData(useremail) {
            this.tableRows = [];
            this.totalProfit = 0;
            let allDocuments = await getDocs(collection(db, String(useremail)));
            console.log(allDocuments);
            allDocuments.forEach((doc) => {
                let documentData = doc.data();
                let coin = (documentData.Coin);
                let ticker = (documentData.Ticker);
                let buyPrice = (documentData.Buy_Price);
                let buyQuantity = (documentData.Buy_Quantity);
                this.getCurrentPrice(ticker).then(cPrice => {
                    let currentPrice = cPrice;
                    let profit = Math.round(buyQuantity * (parseFloat(currentPrice) - parseFloat(buyPrice)));
                    this.totalProfit = this.totalProfit + parseFloat(profit);
                    const data = {
                        coin: coin,
                        ticker: ticker,
                        buyPrice: buyPrice,
                        buyQuantity: buyQuantity,
                        currentPrice: currentPrice,
                        profit: profit,
                    }
                    this.tableRows.push(data);
                });
            })
            console.log(this.tableRows);
        },

        async getCurrentPrice(ticker) {
            let binance = new ccxt.binance();
            let x = await binance.fetch_ohlcv(ticker, "5m");
            return x[499][4];
        },

        async deleteInstrument(coin, email) {
            alert("You are going to delete " + coin)
            await deleteDoc(doc(db, email, coin));
            console.log("Document successfully deleted!", coin);
            let tb = document.getElementById("table")
            while (tb.rows.length > 1){
                tb.deleteRow(1)
        }
        document.getElementById("totalProfit").innerHTML="";
        this.fetchAndUpdateData(this.useremail);
        console.log(this.tableRows);
        }
    },
} */
</script>

<style scoped>
h4 {
    text-align: center;
}

h1,h2 {
    text-align: center;
    background-color: rgb(129, 184, 99);
    font: 700;
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

tr:nth-child(even) {
    background-color: #e3edee;
}

th,td {
    border: 1px solid #dddddd;
    text-align: center;
    padding: 8px;
}

.bwt {
    color: rgb(243, 236, 236);
    background-color: rgb(255, 94, 0);
}
</style>
