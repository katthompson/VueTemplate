<template>
    <div class="form-wrapper">
        <div class="form-content">
        <h1>Form Page</h1>
            <form novalidate>
                <div class="form-group">
                    <label for="firstName">First Name</label><span>*</span>
                    <input v-model="form.firstName" id="firstName" type="text" placeholder="First Name" 
                        v-validate="'required'" data-vv-as="First Name" name="firstName" >
                        <div class="error">{{ errors.first('firstName')}}</div>
                </div>
                <div class="form-group">
                    <label for="lastName">Last Name</label><span>*</span>
                    <input v-model="form.lastName" id="lastName" type="text" placeholder="Last Name"
                    v-validate="'required'" name="lastName">
                    <div class="error">{{ errors.first('lastName')}}</div>
                </div>
                <div class="form-group">
                    <label for="address">Address</label>
                    <input v-model="form.address" id="address" type="text" placeholder="Address">
                </div>
                <div class="form-group">
                    <label>State</label><span>*</span>
                    <select v-model="form.state" v-validate="'required'" name="state">
                        <option v-for="state in form.states" :value="state.abbreviation" :key="state.abreviation">{{state.name}}</option>
                    </select>
                    <div class="error">{{ errors.first('state')}}</div>
                </div>
                <div class="form-group">
                    <label for="email">Email</label><span>*</span>
                    <input v-model="form.email" id="email" type="email" placeholder="Email" 
                    v-validate="'required|email'" name="email">
                    <div class="error">{{ errors.first('email')}}</div>
                </div>
                <div class="form-group">
                    <label>ZIP Code</label><span>*</span>
                    <input v-model="form.zipcode" id="zipcode" type="text" placeholder="ZIP Code"
                    v-validate="{required:true, regex:/^\d{5}$/}" name="zip" maxlength="5">
                    <div class="error">{{ errors.first('zip')}}</div>
                </div>
                <div class="form-group cb-group">
                    <input type="checkbox" v-model="form.requiredCB" v-validate="'required'" name="requiredCB"/> 
                    <label class="cbLabel">This is required.</label>
                    <div class="error">{{ errors.first('requiredCB')}}</div>
                </div>
                <div class="form-group cb-group">
                    <input type="checkbox" v-model="form.notRequiredCB"/> 
                    <label class="cbLabel">This is  not required.</label>
                </div>
                <div class="form-group radios">
                    <p>This radio button group is not required.</p>
                    <div class="radio-group">
                        <input type="radio" id="radio1" value="Option1" name="radios" v-model="form.radioOption"/>
                        <label>Option 1</label>
                    </div>
                    <div class="radio-group">
                        <input type="radio" id="radio2" value="Option2" name="radios" v-model="form.radioOption"/>
                        <label>Option 2</label>
                    </div>

                </div>
                <div class="form-group radios">
                    <p>This radio button group Is required. So one option is prechecked.</p>
                    <div class="radio-group">
                        <input type="radio" id="radio3" value="Option3" name="radiosReq" checked v-model="form.radioReqOption"/>
                        <label>Option 3</label>
                    </div>
                    <div class="radio-group">
                        <input type="radio" id="radio4" value="Option4" name="radiosReq" v-model="form.radioReqOption"/>
                        <label>Option 4</label>
                    </div>
                </div>
                <button @click.stop.prevent="handleSubmit">Submit</button>
            </form>
         </div>
    </div>
</template>

<script src="./Form.js"></script>
<!-- <style src="./Form.css" lang="css"></style> -->
<style src="./Form.scss" lang="scss"></style> 
