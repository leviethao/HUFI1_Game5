// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    leftItem: cc.Node = null;
    rightItem: cc.Node = null;
    canvas: cc.Canvas = null;
    // LIFE-CYCLE CALLBACKS:

    onLoad () {

    }

    init () {
        this.leftItem = this.node.getChildByName("LeftItem");
        this.rightItem = this.node.getChildByName("RightItem");

        this.leftItem.x = -this.canvas.node.width / 2;
        this.rightItem.x = this.canvas.node.width / 2;
    }

    start () {

    }

    update (dt) {
        this.node.y -= 100 * dt;
    }
}
