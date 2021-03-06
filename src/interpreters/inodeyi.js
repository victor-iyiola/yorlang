const IBase = require("./ibase.js");

class INodeYi extends IBase {
    interpreteNode (node) {
        const yivalue = this.evaluateNode(node.yivalue);

        for (let IRUIndex = 0; IRUIndex < node.yibody.length; IRUIndex++) {
            if (INodeYi.isIRUValueMatchYiValue(this, node.yibody[IRUIndex].IRUvalue, yivalue)) {
                INodeYi.runMatchedIRUBody(this, node.yibody[IRUIndex].IRUbody);
                break;
            }

            if (INodeYi.canRunPadasi(IRUIndex, node)) {
                INodeYi.runPadasi(this, node.padasi);
            }
        }
    }

    static isIRUValueMatchYiValue (context, IRUvalueNode, yivalue) {
        return context.evaluateNode(IRUvalueNode) === yivalue;
    }

    static runMatchedIRUBody (context, IRUBody) {
        for (let i = 0; i < IRUBody.length; i++) {
            context.evaluateNode(IRUBody[i]);
        }
    }

    static canRunPadasi (IRUIndex, node) {
        return (IRUIndex === node.yibody.length - 1) && (node.padasi !== undefined);
    }

    static runPadasi (context, padasi) {
        for (let padasiIndex = 0; padasiIndex < padasi.length; padasiIndex++) {
            context.evaluateNode(padasi[padasiIndex]);
        }
    }
}

module.exports = new INodeYi();
