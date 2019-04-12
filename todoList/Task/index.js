const PATH = "./tasks.json"
const _ = require('lodash');
const fs = require('fs');

const load = () => {
    try {
        const rawData = fs.readFileSync(PATH);
        const data = JSON.parse(rawData);
        return data;
    } catch(err) {
        return [];
    }
}

const getByName = (data) => {
    const loadTask = load();
    return loadTask.find(task => task.name === data.name)
}

const get = () => {
    try {
        const loadTask = load();
        return loadTask;
    } catch(err) {
        return [];
    }
}

const add = (data) => {
    try {
        const loadTask = load()
        if(loadTask.length === 0) {
            fs.writeFileSync(PATH)
        }
        loadTask.push(data)
        fs.writeFileSync(PATH,JSON.stringify(loadTask))
        return JSON.parse(load());
    } catch(err) {
        return null
    }
}

const edit = (data) => {
    try {
        const taskFind = getByName(data)
        if(taskFind) {
            const taskAll = load()
            taskAll.map(taskItem => {
                if(taskItem.name === data.name) {
                    taskItem.description = data.description;
                }
            })
            fs.writeFileSync(PATH,JSON.stringify(taskAll))
        }
    } catch(err) {
        return null
    }
}

const deleted = (data) => {
    try {
        const taskAll = load()
        _.remove(taskAll, (task) => {
            return task.name === data.name;
        });
        fs.writeFileSync(PATH,JSON.stringify(taskAll))
    } catch(err) {
        return null
    }
}

module.exports = {
    get,
    getByName,
    add,
    edit,
    deleted
}
