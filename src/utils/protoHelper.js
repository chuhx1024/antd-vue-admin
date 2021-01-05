import dsprotoJson from '@/assets/proto/ws/dsproto.json'
import protobuf from 'protobufjs'

class ProtoHelper {
    constructor () {
        const root = protobuf.Root.fromJSON(dsprotoJson)
        this.AuditProgress = root.lookup('protos.AuditProgress')
    }
}

export default new ProtoHelper()
