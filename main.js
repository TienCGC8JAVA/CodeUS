function is_usZipCode(str)
{
    let regexp = /^[0-9]{5}(?:\s-\s[0-9]{4})?$/;
    if (regexp.test(str))
    {
        return true;
    }
    return false;
}

let zipCode = "03201 - 2150";
    console.log(is_usZipCode(zipcode));
zipCode = "7892";
console.log(is_usZipCode(zipcode));