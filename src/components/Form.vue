<script>
export default{
    data: function () {
        return {
            name : "",
            email : "",
            phone : "",
            address : "",
            formRef : "",
        }
    },
    methods : {
        submitForm(){
            if (this.name =="" || this.email == "" || this.phone == "" || this.address == "" ) {
                alert("Fields can't be empty !");
                return;
            }
            let postData={
                "name" : this.name,
                "email" : this.email,
                "phone" : this.phone,
                "address" : this.address
            }
            this.$store.commit('formData', postData);
            this.$refs.formRef.reset();
            this.name = "";
            this.email = "";
            this.phone = "";
            this.address = "";
        }
    }
}
</script>

<template>
    <div class="form">
        <form ref="formRef">
            <h2>Fill Your Form</h2>
            <input type="text" name="fullName" required placeholder="Please enter your Name" v-model="name">
            <input type="email" name="email" required placeholder="Please enter your Email ID" v-model="email">
            <input type="number" name="phone" required placeholder="Please enter your Phone No" v-model="phone">
            <textarea name="address" id="" required cols="30" rows="10" placeholder="Please enter your Address" v-model="address"></textarea>
            <input class="submit" type="submit" @click.prevent="submitForm()" value="Submit">
        </form>
    </div>
</template>
