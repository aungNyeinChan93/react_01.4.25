// OOP 
class Response {
    constructor(name) {
        console.log('constructor function running');
        this._name = name;
    };

    #key = '123123';
    _customers = [
        { name: 'susu', gender: 'female' },
        { name: 'koko', gender: 'male' },
        { name: 'mumu', gender: 'female' },
        { name: 'chan', gender: 'male' },
    ];
    success() {
        console.log('response success!');
    };
    fail(res, message = '', result = {}, status = 500) {
        res.status(status).json({
            message,
            result
        })
    };
    addCustomer(customer = {}) {
        this._customers.push(customer);
    };

    static getCustomer() {
        return new Response()._customers;
    };

    getKey() {
        return this.#key;
    }
};

const responce = new Response('test');
console.log(responce._name);

responce.success();
responce._customers.push({ name: 'phyoe', gender: 'male' });
responce.addCustomer({ name: 'tun', gender: 'male' })
console.log(responce._customers);
console.log(`Static:  `, Response.getCustomer());
console.log(responce.getKey());
console.log(responce._customers);

const maleOnly = responce._customers.filter(c => c.gender === 'male');
console.log(maleOnly);

class Request extends Response {
    constructor(name, req) {
        super(name);
        this.request = req;
    }
    getRequest() {
        console.log('get request!');
    }
}
const request = new Request('test2', 'all');
console.log(request._name);
console.log(request.request);


// ❌❌❌❌❌❌❌

// Functional 
function useResponse() {
    const customers = [
        { name: 'susu', gender: 'female' },
        { name: 'koko', gender: 'male' },
        { name: 'mumu', gender: 'female' },
        { name: 'chan', gender: 'male' },
    ];
    const addCustomer = (customer) => {
        return customers.push(customer)
    }
    return { customers, addCustomer }
}

const { customers, addCustomer } = useResponse();
addCustomer({ name: 'myamya', gender: "female" });
console.log(customers);




