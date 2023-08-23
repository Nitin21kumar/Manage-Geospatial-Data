// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract currentLocation{
    string longitude;
    string lattitude;

    function setGeo( string memory _latti, string  memory _longi)public returns (string memory, string memory){
        lattitude = _latti;
        longitude = _longi;
        return (lattitude, longitude);

    }
}
