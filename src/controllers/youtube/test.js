async function test(request, response) {
    console.log('heelllooo')
    return response.status(200).send({});
}

export default {
    method: 'get',
    path: '/test',
    handler: test,
};
