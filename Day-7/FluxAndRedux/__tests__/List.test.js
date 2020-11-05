import List  from "../components/List";
const {shallow}= require("enzyme");


describe('List tests', () => {
    it('renders list items', () => {
        const items = ['one', 'two','three']
        const wrapper = shallow(<List items = { items } />)
    });
    
})
