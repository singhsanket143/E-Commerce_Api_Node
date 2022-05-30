const {Category} = require('../../models/index');
const categoryService = require('../../services/category.service');


const categoryPayload = {
    id: 1,
    name: 'Test category',
    description: 'This is a test category',
    update: jest.fn()
};


test('The category service should create a category', async () => {
    const spy = jest.spyOn(Category, 'create').mockImplementation(() => {
        return categoryPayload;
    })
    const response = await categoryService.create(categoryPayload);
    expect(spy).toHaveBeenCalled();
    expect(response).toBe(categoryPayload);
});

test('The category service should return all categories', async () => {
    const spy = jest.spyOn(Category, 'findAll').mockImplementation(() => {
        return [categoryPayload];
    });

    const response = await categoryService.getAll();
    expect(spy).toHaveBeenCalled();
    expect(response).toContain(categoryPayload);
});

test('The category service should return category by id', async () => {
    const spy = jest.spyOn(Category, 'findByPk').mockImplementation(() => {
        return categoryPayload;
    });
    const response = await categoryService.getById(1);
    expect(spy).toHaveBeenCalled();
    expect(response).toEqual(categoryPayload);
});

test('The categry service should update the category', async () => {
    const spy1 = jest.spyOn(Category, 'findByPk').mockImplementation(() => {
        return categoryPayload;
    });
    const spy2 = jest.spyOn(categoryPayload, 'update').mockImplementation(() => {
        return;
    });
    const response = await categoryService.update({description: 'new description'}, 1);
    expect(spy1).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalled();

    expect(response).toBe(categoryPayload)
})


test('The category service shouldnot update the category', async () => {
    const spy = jest.spyOn(Category, 'findByPk').mockImplementation(() => {
        return undefined;
    });
    const response = await categoryService.update({description: 'new description'}, 1);
    expect(spy).toHaveBeenCalled();
    expect(response).toEqual({})
})