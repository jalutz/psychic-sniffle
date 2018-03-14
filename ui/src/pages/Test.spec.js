// import React from 'react';
import {expect} from 'chai'
import Test from "./Test.jsx";
import {shallow} from "enzyme";

describe('testing the test', ()=>{
    it('should have a text in the test', ()=>{
        expect(2).to.eql(2);
        // let tree = shallow(<Test/>);

        // expect(tree.find(".test").props().children).to.eql("Hello");
    });
});