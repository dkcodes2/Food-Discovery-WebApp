<template>

    <div id = "page-title">Search Results</div>
    <div id = "user-query">You searched for: {{ searchText }} </div>

    <div id="userQueryView"></div>

    <!-- <h1 id = "Current"> Current portfolio</h1>
    <h1>Search Results</h1> -->

    <!-- <table id = "table">
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
    </table> <br> <br> -->


    

</template>

<script>
import firebaseApp from "../firebase.js"
import {getFirestore} from "firebase/firestore"
import {collection, getDocs, doc, deleteDoc} from "firebase/firestore"

const db = getFirestore(firebaseApp);

export default {
    mounted() {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.user = user;
            }
        })
        
        async function display(){
            let allDocuments = await getDocs(collection(db, "Users")) // TODO: change to get all users
            // change to filter allDocuments by username match
            
            let searchText; // TO GET THIS FROM ANOTHER COMPONENT
            let index = 1;
            // let totalProfit = 0;

            allDocuments.forEach((docs) => {
                let documentData= docs.data()

                // let coin = (documentData.Coin)
                // let ticker = (documentData.Ticker)
                // let buyPrice = (documentData.Buy_Price)
                // let buyQuantity = (documentData.Buy_Quantity)

                let username = (documentData.Username)
                let profileDescription = (documentData.User_Description)

                if (username.startsWith(searchText)) {
                    let view = document.getElementById("usersQueryView")
                    
                    var profileDiv = document.getElementById.createElement('div')
                    profileDiv.className = "profile"

                    var nameDiv = document.getElementById.createElement('div') //TODO HTML for this

                    var nameTitle = `${index}. ${username}`
                    nameDiv.innerHTML = nameTitle

                    var descriptionDiv = document.getElementById.createElement('div');
                    descriptionDiv.innerHTML = documentData.profileDescription

                    profileDiv.appendChild("nameDiv");
                    profileDiv.appendChild("descriptionDiv");
                    view.appendChild("profileDiv");
                    var br = document.createElement("br");
                    view.appendChild(br);
                }
                // let table = document.getElementById("table")
                // let row = table.insertRow(index);

                // let cell1 = row.insertCell(0); let cell2 = row.insertCell(1); let cell3 = row.insertCell(2);
                // let cell4 = row.insertCell(3); let cell5 = row.insertCell(4); let cell6 = row.insertCell(5);
                // let cell7 = row.insertCell(6); let cell8 = row.insertCell(7);

                // cell1.innerHTML = index;
                // cell2.innerHTML = coin;
                // cell3.innerHTML = ticker;
                // cell4.innerHTML = buyPrice;
                // cell5.innerHTML = buyQuantity;
                // cell6.innerHTML = 0;
                // cell7.innerHTML = 0;

                // cell7.className = "profits";

                // let deleteButton = document.createElement("button");
                
                // deleteButton.id = String(coin)
                // deleteButton.className = "bwt";
                // deleteButton.innerHTML = "Delete";

                // cell8.appendChild(deleteButton)
                // deleteButton.onclick = function() {
                //     deleteInstrument(coin);
                // }

        // async function profitCalculator(ticker){
        //     let binance = new ccxt.binance();
        //     let x = await binance.fetch_ohlcv(ticker, "5m");
        //     cell6.innerHTML = x[499][4];
        //     cell7.innerHTML = Math.round(buyQuantity * (parseFloat(cell6.innerHTML) - parseFloat(buyPrice)));
                
        //     totalProfit = totalProfit  + parseFloat(cell7.innerHTML);
        //     document.getElementById("totalProfit").innerHTML = (" Total Profit is : $ " + String(totalProfit));
        // }

        // profitCalculator(ticker);
        index+= 1;
        })
    }
    display();
    
    // async function deleteInstrument(coin){
    //     alert("You are going to delete " + coin)
    //     await deleteDoc(doc(db, "Portfolio", coin))
    //     console.log("Document successfully deleted!", coin);
    //     let tb = document.getElementById("table")
    //     while (tb.rows.length > 1) {
    //         tb.deleteRow(1)
    //     }
    //     document.getElementById("totalProfit").innerHTML = ""
    //     display()
    // }
    }
}

</script>

<style scoped>
body {
    font-family: sans-serif;
    line-height: 1.4rem;
}

#page-title {
    font-size:xx-large;
    font-weight: bolder;
    margin-left: 25%;
}

#user-query {
    margin-top: 0.3rem;
    margin-left: 25%;
    font-size: large;
    font-style: oblique;
}

.profile {
    Width: 40%;
    margin:auto;
    font-family:sans-serif;
    margin-top: 2rem;
    margin-bottom: 3rem;
    
}
.name {
    font-size: large;
    font-weight: bold;
    margin: 4px;
}

.description {
    margin: 0.2rem;
    margin-left: 2rem;

}


.bwt {
    /* color: rgb(243, 236, 236);
    background-color: rgb(255, 94, 0); */
}
</style>