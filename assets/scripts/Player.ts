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
import InGame from "./InGame";
import GameSetting from "./GameSetting";

enum ShrinkStatus {
    None,
    ShrinkBack,
    GrownUp
}

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Canvas)
    canvas: cc.Canvas = null;

    leftItem: cc.Node = null;
    rightItem: cc.Node = null;
    shrinkSpeed: number = 0;
    shrinkStatus: ShrinkStatus = ShrinkStatus.None;
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.init();
        this.canvas.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart.bind(this));
        this.canvas.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove.bind(this));
        this.canvas.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd.bind(this));
    }

    init () {
        this.leftItem = this.node.getChildByName("LeftItem");
        this.rightItem = this.node.getChildByName("RightItem");

        let gameSetting = this.canvas.getComponent(InGame).gameSetting.getComponent(GameSetting);
        this.shrinkSpeed = gameSetting.shrinkSpeed;
    }

    start () {

    }

    // update (dt) {}

    onTouchStart () {
        this.shrinkStatus = ShrinkStatus.GrownUp;
    }

    onTouchMove () {

    }

    onTouchEnd () {
        this.shrinkStatus = ShrinkStatus.ShrinkBack;
    }

    grownUp (dt: number) {
        if (this.shrinkStatus != ShrinkStatus.GrownUp) {
            return;
        }

        this.leftItem.x -= this.shrinkSpeed * dt;
        this.rightItem.x += this.shrinkSpeed * dt;
    }

    shrinkBack (dt: number) {
        if (this.shrinkStatus != ShrinkStatus.ShrinkBack) {
            return;
        }

        this.leftItem.x += this.shrinkSpeed * dt;
        this.rightItem.x -= this.shrinkSpeed * dt;
    }
}
