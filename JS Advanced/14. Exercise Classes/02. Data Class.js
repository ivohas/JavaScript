// · method (String)

// · uri (String)

// · version (String)

// · message (String)

// · response (String)

// · fulfilled (Boolean)

class Request{
    constructor(method,uri,version,message)
    {
        this.method=method
        this.uri=uri
        this.version=version
        this.message=message
    }
   
    get fulfilled(){
        return this._fulfilled;
    }
    set fulfilled(value){
        this._fulfilled=value
    }
     fulfilled=false
     get response(){
        return this._response
     }
     set response(value){
        this.response=value
     }
     response=undefined
}