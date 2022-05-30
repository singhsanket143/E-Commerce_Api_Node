const {mockRequest, mockResponse} = require('./mocker');
const categoryController = require('../../controllers/category.controller');
const categoryService = require('../../services/category.service');
const categoryPayload = {
    id: 1,
    name: 'Test category',
    description: 'This is a test category',
    update: jest.fn()
};
test('Category controller should create a category', async () => {
    const spy = jest.spyOn(categoryService, 'create').mockImplementation(() => {
        return categoryPayload;
    });
    const req = mockRequest();
    const res = mockResponse();
    const response = await categoryController.createCategory(req, res);
    expect(spy).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
        message: 'Successfully created the category',
        success: true,
        data: categoryPayload,
        err: {}
    });
})

test('Category controller should not create a category', async () => {
    const spy = jest.spyOn(categoryService, 'create').mockImplementation(() => {
        return undefined;
    });
    const req = mockRequest();
    const res = mockResponse();
    const response = await categoryController.createCategory(req, res);
    expect(spy).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
        message: 'Something went wrong',
        success: false,
        data: {},
        err: 'Not able to do the operation on category'
    });
})