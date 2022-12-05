

async function get(category, id=undefined) {

    let url = `http://localhost:3001/api/${category}/`;

    if (!id) {

        console.log(`Fetching from ${url}` );

        const data = await (await fetch(url)).json();

        console.log('Data:');
        console.log(data);

        return data;
    }

    url =+ id;

    console.log(`Fetching from ${url}`);

    const data = await (await fetch(url)).json();

    console.log('Data:');
    console.log(data);
    
    return data;
}

async function post(category, body) {

    let url = `http://localhost:3001/api/${category}`;

    console.log(`Fetching from ${url}` );

    let response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'},
    });

    if (response.ok) {
        console.log('Successfully posted:')
        console.log(body);
    } else {
        alert(response.statusText);
    }

    return;
}

async function update(category, body, id) {

    let url = `http://localhost:3001/api/${category}/${id}`;

    let response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'}
    })

    if (response.ok) {
        console.log('Successfully updated:')
        console.log(body);
    } else {
        alert(response.statusText);
    }

    return;
}

async function erase(category, id) {

    let url = `http://localhost:3001/api/${category}/${id}`;

    const response = await fetch(url, {
        method: 'DELETE'
    });

    if (response.ok) {
        console.log('Successfully deleted')
    } else {
        alert(response.statusText);
    }
}


module.exports = { get, post, update, erase };