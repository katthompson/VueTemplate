import Vue from 'vue';
import VeeValidate, { Validator } from 'vee-validate';
import VueRouter from 'vue-router';
import States from '../../assets/states.json';

//use this to overwrite default error messages, or use data-vv-as="your custom field name here"
//on the input
const dictionary = {
    custom: {
        firstName:{
            required: 'First Name is required.'
        },
        lastName:{
            required: 'Last Name is required.'
        },
        state:{
            required: 'State is required.'
        },
        email:{
            required: 'Email is required.',
            email: 'Please enter a valid Email.'
        },
        zip: {
            required: 'ZIP Code is required.',
            regex: "Please enter a valid ZIP Code."
        },
        requiredCB: {
            required: 'This checkbox is required.'
        }
    }
}
Validator.localize('en',dictionary);
Vue.use(VeeValidate);
Vue.use(VueRouter);

export default {
    data() {
        return {
            isSubmitted: false,
            form: {
                firstName:'',
                lastName:'',
                address:'',
                state:'',
                states: States,
                email:'',
                zipcode:'',
                requiredCB: false,
                notRequiredCB: false,
                radioOption:'',
                radioReqOption:'Option3'
            }
        }
    },
    methods: {
       handleSubmit(event) {
        event.preventDefault();
           this.isSubmitted =  true;
            this.$validator.validate().then(valid => {
                //console.log(valid);
                if (valid){
                    console.log("form is valid: submit");
                    //return form data
                    let formData = {
                        firstName: this.form.firstName,
                        lastName: this.form.lastName,
                        address: this.form.address,
                        stateAbbr: this.form.state,
                        email: this.form.email,
                        zip: this.form.zipcode,
                        required: this.form.requiredCB,
                        notRequired: this.form.notRequiredCB,
                        rbg1: this.form.radioOption,
                        rbg2: this.form.radioReqOption
                    }

                    console.log('formData: ' + JSON.stringify(formData));

                    //////////////////////////////////////////

                    var postUrl = 'https://qccbb6l0mb.execute-api.us-east-1.amazonaws.com/dev/form';

                    
                    postData(postUrl, formData)
                    .then(data => {
                        console.log("POST - data: " + JSON.stringify(data));
                        console.log(JSON.stringify(data))  // JSON-string from 'response.json()' call
                    }) 
                    .catch(error => {
                        console.error(error);
                        alert('There was some problem with sending your message. ' + error.toString());
                    });  

                    function postData(url = '', data = {}) {
                        // Default options are marked with *
                        return fetch(url, {
                            method: "POST", // *GET, POST, PUT, DELETE, etc.
                            mode: "cors", // no-cors, cors, *same-origin
                            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                            credentials: "omit", // include, *same-origin, omit
                            headers: {
                                "Content-Type": "application/json", // "Content-Type": "application/x-www-form-urlencoded",
                                "X-Api-Key": "3CPVwCspkA6yqrJIgly469ZP6rvtv4TD16omMzUs"
                                //"X-Api-Key": process.env.REACT_APP_X_API_KEY
                            },
                            redirect: "follow", // manual, *follow, error
                            referrer: "no-referrer", // no-referrer, *client
                            body: JSON.stringify(data), // body data type must match "Content-Type" header
                        })
                        .then(response => response.json()); // parses response to JSON
                    } 
                    //reset input fields here
                    this.form.firstName = '';
                    this.form.lastName = '';
                    this.form.address = '';
                    this.form.state = '';
                    this.form.email = '';
                    this.form.zipcode = '';
                    this.form.requiredCB = '';
                    this.form.notRequiredCB = '';
                    this.form.radioOption = '';
                    this.form.radioReqOption = 'Option3';

                    //////////////////////////////////////////

                    //route to Thank you page
                    this.$router.push('/ThankYou');
                 } else {
                    console.log("form is invalid: do not submit");
                 }
            });
            
        }
    }
}