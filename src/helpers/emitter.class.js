import * as EventEmitter from 'eventemitter3';

class Emitter {
    static eventEmitter = new EventEmitter();

    static on(eventName, listener) {
        Emitter.eventEmitter.on(eventName, listener);
    }

    static removeEventListener(eventName, listener) {
        Emitter.removeEventListener(eventName, listener);
    }

    static emit(event, payload, error = false) {
        Emitter.eventEmitter.emit(event, payload, error);
    }
}

export default Emitter;