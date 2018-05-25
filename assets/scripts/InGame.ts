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
import CoupleEntity from "./CoupleEntity";
import SimpleEntity from "./SimpleEntity";

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Prefab)
    simpleEntityPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    coupleEntityPrefab: cc.Prefab = null;

    @property(cc.Node)
    gameSetting: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {}

    start () {
        this.spawnEntity();
    }

    // update (dt) {}

    spawnEntity () {
        // let entity = cc.instantiate(this.coupleEntityPrefab);
        // this.node.addChild(entity);
        // entity.getComponent(CoupleEntity).canvas = this.node.getComponent(cc.Canvas);
        // entity.getComponent(CoupleEntity).init();

        let entity = cc.instantiate(this.simpleEntityPrefab);
        this.node.addChild(entity);
        entity.getComponent(SimpleEntity).canvas = this.node.getComponent(cc.Canvas);
        entity.getComponent(SimpleEntity).init();
    }
}
