const exampleUseState = (init) => {
    const setInit = (cb) => cb(init);
    return [init, setInit]
}

const mydata = exampleUseState('mgmg');
console.log(mydata[0]);

const [state, setState] = exampleUseState([1, 2, 3, 4])
console.log(state);
console.log(setState((state) => state.push(5)));
console.log(state);

export default exampleUseState;
