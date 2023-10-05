/*
Question 2: Promises
*/

// Create a method resolvedPromise that is similar to delayedSuccess 
// and resolves a message after a timeout of 500ms.
const resolvedPromise = () => {
    setTimeout(() => {
        let succes = {"message": "delayed success!"}
        console.log(succes);
    }, 500);
}

// Create a method rejectedPromise that is similar to delayedException and rejects an
// error message after a timeout of 500ms.
const rejectedPromise = () => {
    setTimeout(() => {
        try {
            throw new Error("error: delayed exception!");
        }
        catch(e){
            console.error(e);
        }

    }, 500);
}

// Call both promises separately and handle the resolved 
// and reject results and then outputto the console
resolvedPromise()
rejectedPromise()