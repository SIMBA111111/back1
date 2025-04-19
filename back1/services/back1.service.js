module.exports = {
    name: "back1",

    actions: {
        acBack1: {
            rest: {
                method: "GET",
                path: "/back1",
            },
            async handler() {
                console.log("acBack1 handler result");
                return "acBack1 handler result"
            }
        },
        ac2Back1: {
            rest: {
                method: "GET",
                path: "/back1-2",
            },
            async handler(ctx) {
                console.log("acBack1 handler result");
                console.log(await ctx.broker.call("back2.acBack2"));
                
                return "acBack1 handler result"
            }
        }
    },

    events: {
        "back1.event"(ctx) {
            console.log("back1 evented", ctx);
        }
    }

}