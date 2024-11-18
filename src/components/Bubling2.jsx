import { Component } from "react";

class Bubling2 extends Component {
    handleCallFamilyToEat() {
        console.log("Hey fam! Food's ready!");
    }

    handleCookEggs(event) {
        event.stopPropagation(); // USED HERE!
        console.log("Molly is cooking fluffy eggs...");
    }

    handleMakeRice() {
        console.log("Molly is making some delicious jasmine rice...");
    }

    handleMixChicken() {
        console.log("Molly is mixing chicken with some yummy spicy sauce!");
    }

    render() {
        return (
            <div className="im-a-parent" style={{backgroundColor: 'red', padding: '5px'}} onClick={this.handleCallFamilyToEat}> 
                <button className="im-a-child" onClick={this.handleCookEggs}>Cook Eggs</button>
                <button className="im-a-child" onClick={this.handleMakeRice}>Make Rice</button>
                <button className="im-a-child" onClick={this.handleMixChicken}>Mix Chicken</button>
            </div>
        );
    }

}

export default Bubling2;