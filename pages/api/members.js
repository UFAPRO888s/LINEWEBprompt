// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { Client } = require("node-linejs");
const bot = new Client();
let jsonData = require("./json/token.json");

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
};

const inGroup = async (req, res) => {
  const {idx} = req.query;
 // console.log(idx)
  if (jsonData.accessToken) {
    bot.login(jsonData.accessToken);
    bot.once("ready", async () => {
      let group = bot.groups.cache.find((g) => g.id.match(idx));
      // let memberinvites = await group.invites.fetch();
      // let invitesData = await memberinvites.map((invite) => {
      // //let invitesData = Object.keys(group.invites).forEach(function(key, index) {
      //   //console.log(invite.id)
      //   return invite
      // });
     // console.log(group.name)
      let member = await group.members.fetch();
      
      let memberData = await member.map((member) => {
        return {
          userid: member.user.id,
          typeUser: member.user.type,
          relation: member.user.relation,
          displayDataUser: member.user.displayName,
          createdTime: member.user.createdTime,
          pictureStatus: member.user.pictureStatus,
          statusMessage: member.user.statusMessage,
          picturePath: member.user.picturePath,
        };
      });

      res?.status(200).json({
        groupName: group.name,
        groupID: group.id,
        membersNum: memberData.length,
        membersIDX: memberData,
        inviteData: group.extra.groupExtra.inviteeMids
      });
    });
  }
};

export default inGroup;
