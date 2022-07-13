export async function post({request}) {
	const params = new URLSearchParams(await request.text());
    const number = params.get("cardnumber");
 	return { 
        body:{
            number: number,
        }
    };
}