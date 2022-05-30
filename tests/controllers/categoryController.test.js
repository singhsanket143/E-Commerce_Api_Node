const {mockRequest, mockResponse} = require('./mocker');
const categoryController = require('../../controllers/category.controller');
const categoryService = require('../../services/category.service');
const categoryPayload = {
    id: 1,
    name: 'Test category',
    description: 'This is a test category',
    update: jest.fn()
};

const productyPayload = {
    id: 1,
    name: 'Test product',
    description: 'This is a test product',
    cost: 1000
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
});


test('Category controller should return all the categories', async () => {
    const req = mockRequest();
    const res = mockResponse();
    const spy = jest.spyOn(categoryService, 'getByName').mockImplementation(() => {
        return [categoryPayload];
    });
    const response = await categoryController.getAllCategories(req, res);
    expect(spy).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
        message: 'Successfully fetched all the categories',
        success: true,
        data: [categoryPayload],
        err: {}
    })
})

test('Category controller should return all the categories', async () => {
    const req = mockRequest();
    req.query = {};
    const res = mockResponse();
    const spy = jest.spyOn(categoryService, 'getAll').mockImplementation(() => {
        return [categoryPayload];
    });
    const response = await categoryController.getAllCategories(req, res);
    expect(spy).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
        message: 'Successfully fetched all the categories',
        success: true,
        data: [categoryPayload],
        err: {}
    })
});

test('Category controller should not return all the categories', async () => {
    const req = mockRequest();
    req.query = {};
    const res = mockResponse();
    const spy = jest.spyOn(categoryService, 'getAll').mockImplementation(() => {
        return undefined;
    });
    const response = await categoryController.getAllCategories(req, res);
    expect(spy).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
        message: 'Not able to find the categories',
        success: false,
        data: [],
        err: 'Category not present'
    });
});

test('Category controller should return category by id', async () => {
    const req = mockRequest();
    const res = mockResponse();
    const spy = jest.spyOn(categoryService, 'getById').mockImplementation(() => {
        return categoryPayload;
    });
    const response = await categoryController.getCategoryById(req, res);
    expect(spy).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
        message: 'Successfully fetched the category',
        success: true,
        data: categoryPayload,
        err: {}
    })
})

test('Category controller should not return category by id', async () => {
    const req = mockRequest();
    const res = mockResponse();
    const spy = jest.spyOn(categoryService, 'getById').mockImplementation(() => {
        return undefined;
    });
    const response = await categoryController.getCategoryById(req, res);
    expect(spy).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
        message: 'Something went wrong',
        success: false,
        data: {},
        err: 'Not able to do the operation on category'
    })
});


test('Category controller should not update category', async () => {
    const req = mockRequest();
    const res = mockResponse();
    const spy = jest.spyOn(categoryService, 'update').mockImplementation(() => {
        return {};
    });
    const response = await categoryController.updateCategory(req, res);
    expect(spy).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
        message: 'Not able to find the category',
        success: false,
        data: {},
        err: 'Not able to do the operation on category'
    })
});

test('Category controller should update category', async () => {
    const req = mockRequest();
    const res = mockResponse();
    const spy = jest.spyOn(categoryService, 'update').mockImplementation(() => {
        return categoryPayload
    });
    const response = await categoryController.updateCategory(req, res);
    expect(spy).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
        message: 'Successfully updated the category',
        success: true,
        data: categoryPayload,
        err: {}
    })
});


test('Category controller should not update category', async () => {
    const req = mockRequest();
    const res = mockResponse();
    const spy = jest.spyOn(categoryService, 'update').mockImplementation(() => {
        return;
    });
    const response = await categoryController.updateCategory(req, res);
    expect(spy).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
        message: 'Not able to find the category',
        success: false,
        data: {},
        err: 'Not able to do the operation on category'
    })
})


test('Category controller should delete category', async () => {
    const req = mockRequest();
    const res = mockResponse();
    const spy = jest.spyOn(categoryService, 'destroy').mockImplementation(() => {
        return categoryPayload;
    });
    const response = await categoryController.deleteCategory(req, res);
    expect(spy).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
        message: 'Successfully deleted the category',
        success: true,
        data: {},
        err: {}
    })
})

test('Category controller should delete category', async () => {
    const req = mockRequest();
    const res = mockResponse();
    const spy = jest.spyOn(categoryService, 'destroy').mockImplementation(() => {
        return;
    });
    const response = await categoryController.deleteCategory(req, res);
    expect(spy).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
        message: 'Not able to find the category',
        success: false,
        data: {},
        err: 'Not able to do the operation on category'
    })
})


test('Category controller should return products by category', async () => {
    const req = mockRequest();
    const res = mockResponse();
    const spy = jest.spyOn(categoryService, 'getProducts').mockImplementation(() => {
        return [productyPayload];
    });
    const response = await categoryController.getproductsByCategory(req, res);
    expect(spy).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
        message: 'Successfully fetched the products of the category',
        success: true,
        data: [productyPayload],
        err: {}
    })
})

test('Category controller should not return products by category', async () => {
    const req = mockRequest();
    const res = mockResponse();
    const spy = jest.spyOn(categoryService, 'getProducts').mockImplementation(() => {
        return;
    });
    const response = await categoryController.getproductsByCategory(req, res);
    expect(spy).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
        message: 'Not able to find the category',
        success: false,
        data: {},
        err: 'Not able to do the operation on category'
    })
})