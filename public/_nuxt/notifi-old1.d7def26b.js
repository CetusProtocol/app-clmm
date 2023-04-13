import{eP as d,a as Sn,f as hn,r as Be,i as Pn,o as Cn,j as On,x as G,y as A,B as Mn,v as w}from"./entry.7dbcdae4.js";import{u as Nn}from"./wallet.3fc4a512.js";import{a as Gn}from"./index.59f7738f.js";var vn={},V={},Q={},i={},Y={},K={};Object.defineProperty(K,"__esModule",{value:!0});const An=(e,r)=>typeof e=="object"&&e!==null&&Object.prototype.hasOwnProperty.call(e,r),wn=e=>{const r=[];return e.forEach(t=>{An(t,"message")&&typeof t.message=="string"&&r.push(t.message)}),r};class kn extends Error{constructor(r,t){super(`GQL Errors occurred during ${r}`),this.operationName=r,this.errors=t}getErrorMessages(){return wn(this.errors)}}K.default=kn;var In={};Object.defineProperty(In,"__esModule",{value:!0});var $n={};Object.defineProperty($n,"__esModule",{value:!0});(function(e){var r=d&&d.__createBinding||(Object.create?function(n,o,l,u){u===void 0&&(u=l);var m=Object.getOwnPropertyDescriptor(o,l);(!m||("get"in m?!o.__esModule:m.writable||m.configurable))&&(m={enumerable:!0,get:function(){return o[l]}}),Object.defineProperty(n,u,m)}:function(n,o,l,u){u===void 0&&(u=l),n[u]=o[l]}),t=d&&d.__exportStar||function(n,o){for(var l in n)l!=="default"&&!Object.prototype.hasOwnProperty.call(o,l)&&r(o,n,l)},a=d&&d.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(e,"__esModule",{value:!0}),e.GqlError=void 0;const c=a(K);e.GqlError=c.default,t(In,e),t($n,e)})(Y);var Dn={},T={};Object.defineProperty(T,"__esModule",{value:!0});T.makeRequest=T.makeParameterLessRequest=T.makeAuthenticatedRequest=void 0;const jn=Y,x=async(e,r,t,a,c)=>{var n;const{data:o}=await t.post(`/${encodeURIComponent(r)}`,{query:e,variables:a},c),l=(n=o==null?void 0:o.data)===null||n===void 0?void 0:n[r],u=o==null?void 0:o.errors;if(l!=null)return l;throw u!=null?new jn.GqlError(r,u):new Error("Unknown error in makeRequest")},qn=(e,r)=>(t,a,c)=>x(e,r,t,c,{headers:{Authorization:`Bearer ${a}`}});T.makeAuthenticatedRequest=qn;const Rn=(e,r)=>(t,a)=>x(e,r,t,a);T.makeRequest=Rn;const Bn=(e,r)=>t=>x(e,r,t,void 0);T.makeParameterLessRequest=Bn;var J={};Object.defineProperty(J,"__esModule",{value:!0});const Ln=(...e)=>{const r=new Set,t=new Array;return e==null||e.forEach(a=>{r.has(a)||(r.add(a),t.push(a))}),t.join(`
`)};J.default=Ln;var Fn={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.NOTIFI_CONFIGS=void 0,e.NOTIFI_CONFIGS={Production:{gqlUrl:"https://api.notifi.network/gql",storagePrefix:"notifi-jwt",wsUrl:"wss://api.notifi.network/gql"},Staging:{gqlUrl:"https://api.stg.notifi.network/gql",storagePrefix:"notifi-jwt:stg",wsUrl:"wss://api.stg.notifi.network/gql"},Development:{gqlUrl:"https://api.dev.notifi.network/gql",storagePrefix:"notifi-jwt:dev",wsUrl:"wss://api.dev.notifi.network/gql"},Local:{gqlUrl:"https://localhost:5001/gql",storagePrefix:"notifi-jwt:local",wsUrl:"wss://localhost:5001/gql"}};const r=t=>e.NOTIFI_CONFIGS[t];e.default=r})(Fn);(function(e){var r=d&&d.__createBinding||(Object.create?function(u,m,p,f){f===void 0&&(f=p);var D=Object.getOwnPropertyDescriptor(m,p);(!D||("get"in D?!m.__esModule:D.writable||D.configurable))&&(D={enumerable:!0,get:function(){return m[p]}}),Object.defineProperty(u,f,D)}:function(u,m,p,f){f===void 0&&(f=p),u[f]=m[p]}),t=d&&d.__setModuleDefault||(Object.create?function(u,m){Object.defineProperty(u,"default",{enumerable:!0,value:m})}:function(u,m){u.default=m}),a=d&&d.__importStar||function(u){if(u&&u.__esModule)return u;var m={};if(u!=null)for(var p in u)p!=="default"&&Object.prototype.hasOwnProperty.call(u,p)&&r(m,u,p);return t(m,u),m},c=d&&d.__importDefault||function(u){return u&&u.__esModule?u:{default:u}};Object.defineProperty(e,"__esModule",{value:!0}),e.NOTIFI_CONFIGS=e.notifiConfigs=e.makeRequest=e.makeParameterLessRequest=e.makeAuthenticatedRequest=e.collectDependencies=void 0;const n=T;Object.defineProperty(e,"makeAuthenticatedRequest",{enumerable:!0,get:function(){return n.makeAuthenticatedRequest}}),Object.defineProperty(e,"makeParameterLessRequest",{enumerable:!0,get:function(){return n.makeParameterLessRequest}}),Object.defineProperty(e,"makeRequest",{enumerable:!0,get:function(){return n.makeRequest}});const o=c(J);e.collectDependencies=o.default;const l=a(Fn);e.notifiConfigs=l.default,Object.defineProperty(e,"NOTIFI_CONFIGS",{enumerable:!0,get:function(){return l.NOTIFI_CONFIGS}})})(Dn);(function(e){var r=d&&d.__createBinding||(Object.create?function(a,c,n,o){o===void 0&&(o=n);var l=Object.getOwnPropertyDescriptor(c,n);(!l||("get"in l?!c.__esModule:l.writable||l.configurable))&&(l={enumerable:!0,get:function(){return c[n]}}),Object.defineProperty(a,o,l)}:function(a,c,n,o){o===void 0&&(o=n),a[o]=c[n]}),t=d&&d.__exportStar||function(a,c){for(var n in a)n!=="default"&&!Object.prototype.hasOwnProperty.call(c,n)&&r(c,a,n)};Object.defineProperty(e,"__esModule",{value:!0}),t(Y,e),t(Dn,e)})(i);var g={},k={},v={};Object.defineProperty(v,"__esModule",{value:!0});v.filterFragmentDependencies=v.filterFragment=void 0;v.filterFragment=`
fragment filterFragment on Filter {
  id
  name
  filterType
}
`.trim();v.filterFragmentDependencies=[];var b={},I={};Object.defineProperty(I,"__esModule",{value:!0});I.sourceFragmentDependencies=I.sourceFragment=void 0;const Le=v;I.sourceFragment=`
fragment sourceFragment on Source {
  id
  name
  type
  blockchainAddress
  applicableFilters {
    ...filterFragment
  }
}
`.trim();I.sourceFragmentDependencies=[...Le.filterFragmentDependencies,Le.filterFragment];Object.defineProperty(b,"__esModule",{value:!0});b.sourceGroupFragmentDependencies=b.sourceGroupFragment=void 0;const Ue=I;b.sourceGroupFragment=`
fragment sourceGroupFragment on SourceGroup {
  id
  name
  sources {
    ...sourceFragment
  }
}
`.trim();b.sourceGroupFragmentDependencies=[...Ue.sourceFragmentDependencies,Ue.sourceFragment];var y={},S={};Object.defineProperty(S,"__esModule",{value:!0});S.discordTargetFragmentDependencies=S.discordTargetFragment=void 0;S.discordTargetFragment=`
fragment discordTargetFragment on DiscordTarget {
  id
  discordAccountId
  discriminator
  isConfirmed
  username
  name
}
`.trim();S.discordTargetFragmentDependencies=[];var h={};Object.defineProperty(h,"__esModule",{value:!0});h.emailTargetFragmentDependencies=h.emailTargetFragment=void 0;h.emailTargetFragment=`
fragment emailTargetFragment on EmailTarget {
  emailAddress
  id
  isConfirmed
  name
}
`.trim();h.emailTargetFragmentDependencies=[];var P={};Object.defineProperty(P,"__esModule",{value:!0});P.smsTargetFragmentDependencies=P.smsTargetFragment=void 0;P.smsTargetFragment=`
fragment smsTargetFragment on SmsTarget {
  id
  isConfirmed
  name
  phoneNumber
}
`.trim();P.smsTargetFragmentDependencies=[];var C={};Object.defineProperty(C,"__esModule",{value:!0});C.telegramTargetFragmentDependencies=C.telegramTargetFragment=void 0;C.telegramTargetFragment=`
fragment telegramTargetFragment on TelegramTarget {
  id
  isConfirmed
  name
  telegramId
  confirmationUrl
}
`.trim();C.telegramTargetFragmentDependencies=[];Object.defineProperty(y,"__esModule",{value:!0});y.targetGroupFragmentDependencies=y.targetGroupFragment=void 0;const We=S,Ve=h,He=P,ze=C;y.targetGroupFragment=`
fragment targetGroupFragment on TargetGroup {
  id
  name
  emailTargets {
    ...emailTargetFragment
  }
  smsTargets {
    ...smsTargetFragment
  }
  telegramTargets {
    ...telegramTargetFragment
  }
  discordTargets {
    ...discordTargetFragment
  }
}
`.trim();y.targetGroupFragmentDependencies=[...Ve.emailTargetFragmentDependencies,...He.smsTargetFragmentDependencies,...ze.telegramTargetFragmentDependencies,...We.discordTargetFragmentDependencies,Ve.emailTargetFragment,He.smsTargetFragment,ze.telegramTargetFragment,We.discordTargetFragment];Object.defineProperty(k,"__esModule",{value:!0});k.alertFragmentDependencies=k.alertFragment=void 0;const Qe=v,Ye=b,Ke=y;k.alertFragment=`
fragment alertFragment on Alert {
  id
  groupName
  name
  filterOptions
  filter {
    ...filterFragment
  }
  sourceGroup {
    ...sourceGroupFragment
  }
  targetGroup {
    ...targetGroupFragment
  }
}
`.trim();k.alertFragmentDependencies=[...Ye.sourceGroupFragmentDependencies,...Qe.filterFragmentDependencies,...Ke.targetGroupFragmentDependencies,Ye.sourceGroupFragment,Qe.filterFragment,Ke.targetGroupFragment];var O={};Object.defineProperty(O,"__esModule",{value:!0});O.authorizationFragmentDependencies=O.authorizationFragment=void 0;O.authorizationFragment=`
fragment authorizationFragment on Authorization {
  token
  expiry
}
`.trim();O.authorizationFragmentDependencies=[];var En={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.beginLogInByTransactionFragmentDependencies=e.beginLogInByTransactionFragment=void 0,e.beginLogInByTransactionFragment=`
fragment beginLogInByTransactionFragment on BeginLogInByTransactionResult {
  nonce
}
`.trim(),e.beginLogInByTransactionFragmentDependencies=[e.beginLogInByTransactionFragment]})(En);var j={};Object.defineProperty(j,"__esModule",{value:!0});j.clientConfigurationFragmentDependencies=j.clientConfigurationFragment=void 0;j.clientConfigurationFragment=`
fragment clientConfigurationFragment on ClientConfiguration {
  supportedSmsCountryCodes
  supportedTargetTypes
}
`.trim();j.clientConfigurationFragmentDependencies=[];var bn={},M={};Object.defineProperty(M,"__esModule",{value:!0});M.userFragmentDependencies=M.userFragment=void 0;const xe=O;M.userFragment=`
fragment userFragment on User {
  email
  emailConfirmed
  authorization {
    ...authorizationFragment
  }
  roles
}
`.trim();M.userFragmentDependencies=[...xe.authorizationFragmentDependencies,xe.authorizationFragment];(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.completeLogInByTransactionFragmentDependencies=e.completeLogInByTransactionFragment=void 0;const r=M;e.completeLogInByTransactionFragment=`
fragment completeLogInByTransactionFragment on CompleteLogInByTransactionResult {
  ...userFragment
}
`.trim(),e.completeLogInByTransactionFragmentDependencies=[r.userFragment,e.completeLogInByTransactionFragment]})(bn);var q={};Object.defineProperty(q,"__esModule",{value:!0});q.connectedWalletFragmentDependencies=q.connectedWalletFragment=void 0;q.connectedWalletFragment=`
fragment connectedWalletFragment on ConnectedWallet {
  address
  walletBlockchain
}
`.trim();q.connectedWalletFragmentDependencies=[];var $={},N={};Object.defineProperty(N,"__esModule",{value:!0});N.participantFragmentDependencies=N.participantFragment=void 0;N.participantFragment=`
fragment Participant on ConversationParticipant {
  conversationId
  conversationParticipantType
  profile {
    avatarData
    avatarDataType
    id
    preferredAddress
    preferredBlockchain
    preferredName
  }
  resolvedName
  userId
  walletAddress
  walletBlockchain
}
`.trim();N.participantFragmentDependencies=[];Object.defineProperty($,"__esModule",{value:!0});$.conversationMessageFragmentDependencies=$.conversationMessageFragment=void 0;const Je=N;$.conversationMessageFragment=`
fragment ConversationMessage on ConversationMessage {
  id
  userId
  conversationId
  createdDate
  updatedDate
  message
  conversationParticipant {
    ...Participant
  }
}
`.trim();$.conversationMessageFragmentDependencies=[...Je.participantFragmentDependencies,Je.participantFragment];var U={};Object.defineProperty(U,"__esModule",{value:!0});U.ConvMessagePageInfoFragment=void 0;U.ConvMessagePageInfoFragment=`
fragment ConvMessagePageInfo on PageInfo {
  hasNextPage
  endCursor
}
`.trim();var X={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.notificationHistoryEntryFragmentDependencies=e.notificationHistoryEntryFragment=e.NotificationTypeName=void 0,function(r){r.ACCOUNT_BALANCE_CHANGED="AccountBalanceChangedEventDetails",r.BROADCAST_MESSAGE="BroadcastMessageEventDetails",r.DIRECT_TENANT_MESSAGE="DirectTenantMessageEventDetails",r.NFT_COLLECTION_REPORT="NftCollectionsReportEventDetails",r.CHAT_MESSAGE_RECEIVED="ChatMessageReceivedEventDetails",r.DAO_PROPOSAL_CHANGED="DaoProposalChangedEventDetails",r.NFT_AUCTION_CHANGED="NftAuctionChangedEventDetails",r.WALLETS_ACTIVITY_CHANGED="WalletsActivityChangedEventDetails",r.HEALTH_VALUE_OVER_THRESHOLD="HealthValueOverThresholdEventDetails",r.GENERIC_EVENT="GenericEventDetails"}(e.NotificationTypeName||(e.NotificationTypeName={})),e.notificationHistoryEntryFragment=`
fragment NotificationHistoryEntry on NotificationHistoryEntry {
  id
  createdDate
  eventId
  read
  sourceAddress
  category
  transactionSignature
  targets {
    type
    name
  }
  detail {
    __typename
    ... on AccountBalanceChangedEventDetails {
      walletBlockchain
      direction
      newValue
      previousValue
      tokenSymbol
      isWhaleWatch
    }
    ... on BroadcastMessageEventDetails {
      messageType: type
      subject
      message
    }
    ... on DirectTenantMessageEventDetails {
      tenantName
    }
    ... on NftCollectionsReportEventDetails {
      type
      providerName
      sourceLink
      collections {
        collectionId
        name
        imgUrl
        volume1Day
        volume1DayChange
      }
    }
    ... on ChatMessageReceivedEventDetails {
      senderName
      conversationId
      messageId
      senderId
      senderBlockchain
      senderName
      messageBody
    }
    ... on DAOProposalChangedEventDetails {
      tenantName
      proposalTitle: title
      description
      state
      daoUrl
      proposalUrl
    }
    ... on NftAuctionChangedEventDetails {
      auctionTitle: title
      auctionUrl
      walletBlockchain
      highBidAmount
      highBidSymbol
      imageUrl
    }
    ... on WalletsActivityReportEventDetails {
      providerName
      sourceLink
      walletActivityType: type
      wallets {
        address
        volume1Day
        maxPurchase1Day
        maxPurchaseName
        maxPurchaseImgUrl
        maxPurchaseTokenAddress
      }
    }
    ... on HealthValueOverThresholdEventDetails {
      name
      value
      threshold
      url
    }
    ... on GenericEventDetails {
      sourceName
      notificationTypeName
      genericMessage: message
      action {
        name
        url
      }
      icon
    }
  }
}`.trim(),e.notificationHistoryEntryFragmentDependencies=[]})(X);var R={};Object.defineProperty(R,"__esModule",{value:!0});R.userTopicFragmentDependencies=R.userTopicFragment=void 0;R.userTopicFragment=`
fragment userTopicFragment on UserTopic {
  name
  topicName
  targetCollections
  targetTemplate
}
`.trim();R.userTopicFragmentDependencies=[];var B={};Object.defineProperty(B,"__esModule",{value:!0});B.webhookTargetFragmentDependencies=B.webhookTargetFragment=void 0;B.webhookTargetFragment=`
fragment webhookTargetFragment on WebhookTarget {
  id
  url
  status
  format
  headers {
    key
    value
  }
  id
  name
}
`.trim();B.webhookTargetFragmentDependencies=[];(function(e){var r=d&&d.__createBinding||(Object.create?function(a,c,n,o){o===void 0&&(o=n);var l=Object.getOwnPropertyDescriptor(c,n);(!l||("get"in l?!c.__esModule:l.writable||l.configurable))&&(l={enumerable:!0,get:function(){return c[n]}}),Object.defineProperty(a,o,l)}:function(a,c,n,o){o===void 0&&(o=n),a[o]=c[n]}),t=d&&d.__exportStar||function(a,c){for(var n in a)n!=="default"&&!Object.prototype.hasOwnProperty.call(c,n)&&r(c,a,n)};Object.defineProperty(e,"__esModule",{value:!0}),t(k,e),t(O,e),t(En,e),t(j,e),t(bn,e),t(q,e),t($,e),t(U,e),t(h,e),t(v,e),t(X,e),t(N,e),t(P,e),t(I,e),t(b,e),t(y,e),t(C,e),t(M,e),t(R,e),t(B,e),t(S,e)})(g);Object.defineProperty(Q,"__esModule",{value:!0});const Xe=i,Ze=g,Un=[...Ze.beginLogInByTransactionFragmentDependencies,Ze.beginLogInByTransactionFragment],Wn=`
mutation beginLogInByTransaction(
  $walletAddress: String!
  $walletBlockchain: WalletBlockchain!
  $dappAddress: String!
) {
  beginLogInByTransaction(beginLogInByTransactionInput: {
    walletAddress: $walletAddress
    walletBlockchain: $walletBlockchain
    dappAddress: $dappAddress
  }) {
    ...beginLogInByTransactionFragment
  }
}
`.trim(),Vn=(0,Xe.makeRequest)((0,Xe.collectDependencies)(...Un,Wn),"beginLogInByTransaction");Q.default=Vn;var Z={};Object.defineProperty(Z,"__esModule",{value:!0});const et=i,Hn=[],zn=`
mutation broadcastMessage(
  $idempotencyKey: String
  $topicName: String!
  $targetTemplates: [KeyValuePairOfTargetTypeAndStringInput!]
  $variables: [KeyValuePairOfStringAndStringInput!]
  $timestamp: Long!
  $walletBlockchain: WalletBlockchain!
  $signature: String!
) {
  broadcastMessage(broadcastMessageInput: {
    idempotencyKey: $idempotencyKey
    sourceAddress: $topicName
    targetTemplates: $targetTemplates
    variables: $variables
    timestamp: $timestamp
    walletBlockchain: $walletBlockchain
  }, signature: $signature) {
    id
  }
}
`.trim(),Qn=(0,et.makeRequest)((0,et.collectDependencies)(...Hn,zn),"broadcastMessage");Z.default=Qn;var ee={};Object.defineProperty(ee,"__esModule",{value:!0});const tt=i,nt=g,Yn=[...nt.userFragmentDependencies,nt.userFragment],Kn=`
mutation completeLogInByTransaction(
  $walletAddress: String!,
  $walletBlockchain: WalletBlockchain!,
  $dappAddress: String!,
  $randomUuid: String!,
  $transactionSignature: String!
) {
  completeLogInByTransaction(completeLogInByTransactionInput: {
    walletAddress: $walletAddress
    walletBlockchain: $walletBlockchain
    dappAddress: $dappAddress
    randomUuid: $randomUuid
    transactionSignature: $transactionSignature
  }) {
    ...userFragment
  }
}
`.trim(),xn=(0,tt.makeRequest)((0,tt.collectDependencies)(...Yn,Kn),"completeLogInByTransaction");ee.default=xn;var te={};Object.defineProperty(te,"__esModule",{value:!0});const rt=i,at=g,Jn=[...at.connectedWalletFragmentDependencies,at.connectedWalletFragment],Xn=`
mutation connectWallet(
  $walletPublicKey: String!
  $timestamp: Long!
  $signature: String!
  $walletBlockchain: WalletBlockchain!
  $accountId: String
  $connectWalletConflictResolutionTechnique: ConnectWalletConflictResolutionTechnique
) {
  connectWallet(connectWalletInput: {
    walletPublicKey: $walletPublicKey
    timestamp: $timestamp
    walletBlockchain: $walletBlockchain
    accountId: $accountId
    connectWalletConflictResolutionTechnique: $connectWalletConflictResolutionTechnique
  }, signature: $signature) {
    ...connectedWalletFragment
  }
}
`.trim(),Zn=(0,rt.makeRequest)((0,rt.collectDependencies)(...Jn,Xn),"connectWallet");te.default=Zn;var ne={};Object.defineProperty(ne,"__esModule",{value:!0});const ot=i,it=g,er=[...it.alertFragmentDependencies,it.alertFragment],tr=`
mutation createAlert(
  $name: String!
  $sourceGroupId: String!
  $filterId: String!
  $targetGroupId: String!
  $filterOptions: String!
  $groupName: String!
) {
  createAlert(
    alertInput: {
      name: $name
      sourceGroupId: $sourceGroupId
      filterId: $filterId
      targetGroupId: $targetGroupId
      filterOptions: $filterOptions
      groupName: $groupName
    }
  ) {
    ...alertFragment
  }
}
`.trim(),nr=(0,ot.makeRequest)((0,ot.collectDependencies)(...er,tr),"createAlert");ne.default=nr;var re={};Object.defineProperty(re,"__esModule",{value:!0});const st=i,ct=g,rr=[...ct.discordTargetFragmentDependencies,ct.discordTargetFragment],ar=`
mutation createDiscordTarget(
  $name: String!
  $value: String!
) {
  createDiscordTarget(
    createTargetInput: {
      name: $name
      value: $value
    }
  ) {
    ...discordTargetFragment
  }
}
`.trim(),or=(0,st.makeRequest)((0,st.collectDependencies)(...rr,ar),"createDiscordTarget");re.default=or;var ae={};Object.defineProperty(ae,"__esModule",{value:!0});const lt=i,ut=g,ir=[...ut.emailTargetFragmentDependencies,ut.emailTargetFragment],sr=`
mutation createEmailTarget(
  $name: String!
  $value: String!
) {
  createEmailTarget(
    createTargetInput: {
      name: $name
      value: $value
    }
  ) {
    ...emailTargetFragment
  }
}
`.trim(),cr=(0,lt.makeRequest)((0,lt.collectDependencies)(...ir,sr),"createEmailTarget");ae.default=cr;var oe={};Object.defineProperty(oe,"__esModule",{value:!0});const gt=i,dt=g,lr=[...dt.smsTargetFragmentDependencies,dt.smsTargetFragment],ur=`
mutation createSmsTarget(
  $name: String!
  $value: String!
) {
  createSmsTarget(
    createTargetInput: {
      name: $name
      value: $value
    }
  ) {
    ...smsTargetFragment
  }
}
`.trim(),gr=(0,gt.makeRequest)((0,gt.collectDependencies)(...lr,ur),"createSmsTarget");oe.default=gr;var ie={};Object.defineProperty(ie,"__esModule",{value:!0});const mt=i,pt=g,dr=[...pt.sourceGroupFragmentDependencies,pt.sourceGroupFragment],mr=`
mutation createSourceGroup(
  $name: String!
  $sourceIds: [String!]!
) {
  createSourceGroup(
    sourceGroupInput: {
      name: $name
      sourceIds: $sourceIds
    }
  ) {
    ...sourceGroupFragment
  }
}
`.trim(),pr=(0,mt.makeRequest)((0,mt.collectDependencies)(...dr,mr),"createSourceGroup");ie.default=pr;var se={};Object.defineProperty(se,"__esModule",{value:!0});const ft=i,_t=g,fr=[..._t.sourceFragmentDependencies,_t.sourceFragment],_r=`
mutation createSource(
  $name: String!
  $blockchainAddress: String!
  $type: SourceType!
) {
  createSource(
    createSourceInput: {
      name: $name
      blockchainAddress: $blockchainAddress
      type: $type
    }
  ) {
    ...sourceFragment
  }
}
`.trim(),Tr=(0,ft.makeRequest)((0,ft.collectDependencies)(...fr,_r),"createSource");se.default=Tr;var ce={};Object.defineProperty(ce,"__esModule",{value:!0});const Tt=i,vr=[],Ir=`
mutation createSupportConversation {
  createSupportConversation {
    id
    conversationType
    conversationGates {
       id
    }
    name
    createdDate
    participants {
      conversationParticipantType
      profile {
        id
        preferredAddress
        preferredName
        avatarData
        avatarDataType
      }
      resolvedName
    }
    backgroundImageUrl
  }
}
`.trim(),$r=(0,Tt.makeParameterLessRequest)((0,Tt.collectDependencies)(...vr,Ir),"createSupportConversation");ce.default=$r;var le={};Object.defineProperty(le,"__esModule",{value:!0});const vt=i,It=g,Dr=[...It.targetGroupFragmentDependencies,It.targetGroupFragment],Fr=`
mutation createTargetGroup(
  $name: String!
  $emailTargetIds: [String!]!
  $smsTargetIds: [String!]!
  $telegramTargetIds: [String!]!
  $discordTargetIds: [String!]!
) {
  createTargetGroup(targetGroupInput: {
    name: $name
    emailTargetIds: $emailTargetIds
    smsTargetIds: $smsTargetIds
    telegramTargetIds: $telegramTargetIds
    discordTargetIds: $discordTargetIds
  }) {
    ...targetGroupFragment
  }
}
`.trim(),Er=(0,vt.makeRequest)((0,vt.collectDependencies)(...Dr,Fr),"createTargetGroup");le.default=Er;var ue={};Object.defineProperty(ue,"__esModule",{value:!0});const $t=i,Dt=g,br=[...Dt.telegramTargetFragmentDependencies,Dt.telegramTargetFragment],yr=`
mutation createTelegramTarget(
  $name: String!
  $value: String!
) {
  createTelegramTarget(
    createTargetInput: {
      name: $name
      value: $value
    }
  ) {
    ...telegramTargetFragment
  }
}
`.trim(),Sr=(0,$t.makeRequest)((0,$t.collectDependencies)(...br,yr),"createTelegramTarget");ue.default=Sr;var ge={};Object.defineProperty(ge,"__esModule",{value:!0});const Ft=i,Et=g,hr=[...Et.webhookTargetFragmentDependencies,Et.webhookTargetFragment],Pr=`
mutation createWebhookTarget(
  $name: String!
  $url: String!
  $format: WebhookPayloadFormat!
  $headers: [KeyValuePairOfStringAndStringInput!]!
) {
  createWebhookTarget(
    createTargetInput: {
      name: $name
      url: $url
      format: $format
      headers: $headers
    }
  ) {
    ...webhookTargetFragment
  }
}
`.trim(),Cr=(0,Ft.makeRequest)((0,Ft.collectDependencies)(...hr,Pr),"createWebhookTarget");ge.default=Cr;var de={};Object.defineProperty(de,"__esModule",{value:!0});const bt=i,Or=[],Mr=`
mutation deleteAlert(
  $id: String!
) {
  deleteAlert(alertId: $id) {
    id
  }
}
`.trim(),Nr=(0,bt.makeRequest)((0,bt.collectDependencies)(...Or,Mr),"deleteAlert");de.default=Nr;var me={};Object.defineProperty(me,"__esModule",{value:!0});const yt=i,Gr=[],Ar=`
mutation deleteSourceGroup(
  $id: String!
) {
  deleteSourceGroup(sourceGroupInput: {
    id: $id
  }) {
    id
  }
}
`.trim(),wr=(0,yt.makeRequest)((0,yt.collectDependencies)(...Gr,Ar),"deleteSourceGroup");me.default=wr;var pe={};Object.defineProperty(pe,"__esModule",{value:!0});const St=i,kr=[],jr=`
mutation deleteTargetGroup(
  $id: String!
) {
  deleteTargetGroup(targetGroupInput: {
    id: $id
  }) {
    id
  }
}
`.trim(),qr=(0,St.makeRequest)((0,St.collectDependencies)(...kr,jr),"deleteTargetGroup");pe.default=qr;var fe={};Object.defineProperty(fe,"__esModule",{value:!0});const ht=i,Pt=g,Rr=[...Pt.userFragmentDependencies,Pt.userFragment],Br=`
mutation logInFromDapp(
  $walletPublicKey: String!
  $dappAddress: String!
  $timestamp: Long!
  $signature: String!
  $walletBlockchain: WalletBlockchain
  $accountId: String
) {
  logInFromDapp(dappLogInInput: {
    walletPublicKey: $walletPublicKey
    dappAddress: $dappAddress
    timestamp: $timestamp
    walletBlockchain: $walletBlockchain
    accountId: $accountId
  }, signature: $signature) {
    ...userFragment
  }
}
`.trim(),Lr=(0,ht.makeRequest)((0,ht.collectDependencies)(...Rr,Br),"logInFromDapp");fe.default=Lr;var _e={};Object.defineProperty(_e,"__esModule",{value:!0});const Ct=i,Ot=g,Ur=[...Ot.authorizationFragmentDependencies,Ot.authorizationFragment],Wr=`
mutation refreshAuthorization {
  refreshAuthorization {
    ...authorizationFragment
  }
}
`.trim(),Vr=(0,Ct.makeParameterLessRequest)((0,Ct.collectDependencies)(...Ur,Wr),"refreshAuthorization");_e.default=Vr;var Te={};Object.defineProperty(Te,"__esModule",{value:!0});const Mt=i,Nt=$,Hr=[...Nt.conversationMessageFragmentDependencies,Nt.conversationMessageFragment],zr=`
mutation sendConversationMessage($sendConversationMessageInput: SendConversationMessageInput!) {
  sendConversationMessage(sendConversationMessageInput: $sendConversationMessageInput) {
    ...ConversationMessage
  }
}
`.trim(),Qr=(0,Mt.makeRequest)((0,Mt.collectDependencies)(...Hr,zr),"sendConversationMessage");Te.default=Qr;var ve={};Object.defineProperty(ve,"__esModule",{value:!0});const Gt=i,At=g,Yr=[...At.emailTargetFragmentDependencies,At.emailTargetFragment],Kr=`
mutation sendEmailTargetVerificationRequest(
  $targetId: String!
) {
  sendEmailTargetVerificationRequest(sendTargetConfirmationRequestInput:{
    targetId: $targetId
  }) {
    ...emailTargetFragment
  }
}
`.trim(),xr=(0,Gt.makeRequest)((0,Gt.collectDependencies)(...Yr,Kr),"sendEmailTargetVerificationRequest");ve.default=xr;var Ie={};Object.defineProperty(Ie,"__esModule",{value:!0});const wt=i,kt=g,Jr=[...kt.sourceGroupFragmentDependencies,kt.sourceGroupFragment],Xr=`
mutation updateSourceGroup(
  $id: String!
  $name: String!
  $sourceIds: [String!]!
) {
  updateSourceGroup: createSourceGroup(
    sourceGroupInput: {
      id: $id
      name: $name
      sourceIds: $sourceIds
    }
  ) {
    ...sourceGroupFragment
  }
}
`.trim(),Zr=(0,wt.makeRequest)((0,wt.collectDependencies)(...Jr,Xr),"updateSourceGroup");Ie.default=Zr;var $e={};Object.defineProperty($e,"__esModule",{value:!0});const jt=i,qt=g,ea=[...qt.targetGroupFragmentDependencies,qt.targetGroupFragment],ta=`
mutation updateTargetGroup(
  $id: String!
  $name: String!
  $emailTargetIds: [String!]!
  $smsTargetIds: [String!]!
  $telegramTargetIds: [String!]!
  $discordTargetIds: [String!]!
) {
  updateTargetGroup: createTargetGroup(targetGroupInput: {
    id: $id
    name: $name
    emailTargetIds: $emailTargetIds
    smsTargetIds: $smsTargetIds
    telegramTargetIds: $telegramTargetIds
    discordTargetIds: $discordTargetIds
  }) {
    ...targetGroupFragment
  }
}
`.trim(),na=(0,jt.makeRequest)((0,jt.collectDependencies)(...ea,ta),"updateTargetGroup");$e.default=na;var De={};Object.defineProperty(De,"__esModule",{value:!0});const Rt=i,ra=[],aa=`
query findTenantConfig(
  $tenant: String!
  $type: TenantConfigType!
  $id: String!
) {
  findTenantConfig(findTenantConfigInput: {
    tenant: $tenant
    type: $type
    id: $id
  }) {
    id
    type
    dataJson
  }
}
`.trim(),oa=(0,Rt.makeRequest)((0,Rt.collectDependencies)(...ra,aa),"findTenantConfig");De.default=oa;var Fe={};Object.defineProperty(Fe,"__esModule",{value:!0});const Bt=i,Lt=g,ia=[...Lt.alertFragmentDependencies,Lt.alertFragment],sa=`
query getAlerts {
  alert {
    ...alertFragment
  }
}
`.trim(),ca=(0,Bt.makeParameterLessRequest)((0,Bt.collectDependencies)(...ia,sa),"alert");Fe.default=ca;var Ee={};Object.defineProperty(Ee,"__esModule",{value:!0});const Ut=i,Wt=g,la=[...Wt.clientConfigurationFragmentDependencies,Wt.clientConfigurationFragment],ua=`
query getConfigurationForDapp($dappAddress: String!) {
  configurationForDapp(getConfigurationForDappInput: {
    dappAddress: $dappAddress
  }) {
    ...clientConfigurationFragment
  }
}
`.trim(),ga=(0,Ut.makeRequest)((0,Ut.collectDependencies)(...la,ua),"configurationForDapp");Ee.default=ga;var be={};Object.defineProperty(be,"__esModule",{value:!0});const Vt=i,Ht=g,da=[...Ht.connectedWalletFragmentDependencies,Ht.connectedWalletFragment],ma=`
query getConnectedWallets {
  connectedWallet {
    ...connectedWalletFragment
  }
}
`.trim(),pa=(0,Vt.makeParameterLessRequest)((0,Vt.collectDependencies)(...da,ma),"connectedWallet");be.default=pa;var ye={};Object.defineProperty(ye,"__esModule",{value:!0});const zt=i,fa=U,Qt=$,_a=[...Qt.conversationMessageFragmentDependencies,fa.ConvMessagePageInfoFragment,Qt.conversationMessageFragment],Ta=`query conversationMessages(
  $getConversationMessagesInput: GetConversationMessagesInput!
  $after: String
  $first: Int
) {
  conversationMessages(
    first: $first
    after: $after
    getConversationMessagesInput: $getConversationMessagesInput
  ) {
    nodes {
      ...ConversationMessage
    }
    pageInfo {
      ...ConvMessagePageInfo
    }
  }
}`.trim(),va=(0,zt.makeRequest)((0,zt.collectDependencies)(..._a,Ta),"conversationMessages");ye.default=va;var Se={};Object.defineProperty(Se,"__esModule",{value:!0});const Yt=i,Ia=[],$a=`
query DiscordTargetVerificationLink(
  $discordTargetVerificationLinkInput: DiscordTargetVerificationLinkInput!
) {
  discordTargetVerificationLink(
    discordTargetVerificationLinkInput: $discordTargetVerificationLinkInput
  )
}
`.trim(),Da=(0,Yt.makeRequest)((0,Yt.collectDependencies)(...Ia,$a),"discordTargetVerificationLink");Se.default=Da;var he={};Object.defineProperty(he,"__esModule",{value:!0});const Kt=i,xt=g,Fa=[...xt.discordTargetFragmentDependencies,xt.discordTargetFragment],Ea=`
query getDiscordTargets {
  discordTarget {
    ...discordTargetFragment
  }
}
`.trim(),ba=(0,Kt.makeParameterLessRequest)((0,Kt.collectDependencies)(...Fa,Ea),"discordTarget");he.default=ba;var Pe={};Object.defineProperty(Pe,"__esModule",{value:!0});const Jt=i,Xt=g,ya=[...Xt.emailTargetFragmentDependencies,Xt.emailTargetFragment],Sa=`
query getEmailTargets {
  emailTarget {
    ...emailTargetFragment
  }
}
`.trim(),ha=(0,Jt.makeParameterLessRequest)((0,Jt.collectDependencies)(...ya,Sa),"emailTarget");Pe.default=ha;var Ce={};Object.defineProperty(Ce,"__esModule",{value:!0});const Zt=i,en=g,Pa=[...en.filterFragmentDependencies,en.filterFragment],Ca=`
query getFilters {
  filter {
    ...filterFragment
  }
}
`.trim(),Oa=(0,Zt.makeParameterLessRequest)((0,Zt.collectDependencies)(...Pa,Ca),"filter");Ce.default=Oa;var Oe={};Object.defineProperty(Oe,"__esModule",{value:!0});const tn=i,nn=X,Ma=[...nn.notificationHistoryEntryFragmentDependencies,nn.notificationHistoryEntryFragment],Na=`query getNotificationHistory($after: String, $first: Int) {
  notificationHistory(after: $after, first: $first) {
    nodes {
      ...NotificationHistoryEntry
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}`.trim(),Ga=(0,tn.makeRequest)((0,tn.collectDependencies)(...Ma,Na),"notificationHistory");Oe.default=Ga;var Me={};Object.defineProperty(Me,"__esModule",{value:!0});const rn=i,an=g,Aa=[...an.smsTargetFragmentDependencies,an.smsTargetFragment],wa=`
query getSmsTargets {
  smsTarget {
    ...smsTargetFragment
  }
}
`.trim(),ka=(0,rn.makeParameterLessRequest)((0,rn.collectDependencies)(...Aa,wa),"smsTarget");Me.default=ka;var Ne={};Object.defineProperty(Ne,"__esModule",{value:!0});const on=i,sn=g,ja=[...sn.sourceGroupFragmentDependencies,sn.sourceGroupFragment],qa=`
query getSourceGroups {
  sourceGroup {
    ...sourceGroupFragment
  }
}
`.trim(),Ra=(0,on.makeParameterLessRequest)((0,on.collectDependencies)(...ja,qa),"sourceGroup");Ne.default=Ra;var Ge={};Object.defineProperty(Ge,"__esModule",{value:!0});const cn=i,ln=I,Ba=[...ln.sourceFragmentDependencies,ln.sourceFragment],La=`
query getSources {
  source {
    ...sourceFragment
  }
}
`.trim(),Ua=(0,cn.makeParameterLessRequest)((0,cn.collectDependencies)(...Ba,La),"source");Ge.default=Ua;var Ae={};Object.defineProperty(Ae,"__esModule",{value:!0});const un=i,gn=g,Wa=[...gn.targetGroupFragmentDependencies,gn.targetGroupFragment],Va=`
query getTargetGroups {
  targetGroup {
    ...targetGroupFragment
  }
}
`.trim(),Ha=(0,un.makeParameterLessRequest)((0,un.collectDependencies)(...Wa,Va),"targetGroup");Ae.default=Ha;var we={};Object.defineProperty(we,"__esModule",{value:!0});const dn=i,mn=g,za=[...mn.telegramTargetFragmentDependencies,mn.telegramTargetFragment],Qa=`
query getTelegramTargets {
  telegramTarget {
    ...telegramTargetFragment
  }
}
`.trim(),Ya=(0,dn.makeParameterLessRequest)((0,dn.collectDependencies)(...za,Qa),"telegramTarget");we.default=Ya;var ke={};Object.defineProperty(ke,"__esModule",{value:!0});const pn=i,fn=g,Ka=[...fn.userTopicFragmentDependencies,fn.userTopicFragment],xa=`
query getTopics {
  topics {
    nodes {
      ...userTopicFragment
    }
  }
}
`.trim(),Ja=(0,pn.makeParameterLessRequest)((0,pn.collectDependencies)(...Ka,xa),"topics"),Xa=e=>Ja(e).then(r=>r.nodes);ke.default=Xa;var je={};Object.defineProperty(je,"__esModule",{value:!0});const _n=i,Tn=g,Za=[...Tn.webhookTargetFragmentDependencies,Tn.webhookTargetFragment],eo=`
query getWebhookTargets {
  webhookTarget {
    ...webhookTargetFragment
  }
}
`.trim(),to=(0,_n.makeParameterLessRequest)((0,_n.collectDependencies)(...Za,eo),"webhookTarget");je.default=to;var s=d&&d.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(V,"__esModule",{value:!0});V.NotifiAxiosService=void 0;const no=s(Gn),ro=s(Q),ao=s(Z),oo=s(ee),io=s(te),so=s(ne),co=s(re),lo=s(ae),uo=s(oe),go=s(ie),mo=s(se),po=s(ce),fo=s(le),_o=s(ue),To=s(ge),vo=s(de),Io=s(me),$o=s(pe),Do=s(fe),Fo=s(_e),Eo=s(Te),bo=s(ve),yo=s(Ie),So=s($e),ho=s(De),Po=s(Fe),Co=s(Ee),Oo=s(be),Mo=s(ye),No=s(Se),Go=s(he),Ao=s(Pe),wo=s(Ce),ko=s(Oe),jo=s(Me),qo=s(Ne),Ro=s(Ge),Bo=s(Ae),Lo=s(we),Uo=s(ke),Wo=s(je);class Vo{constructor(r){this.jwt=null,this.setJwt=a=>{this.jwt=a};const t=no.default.create({baseURL:r.gqlUrl});t.interceptors.request.use(a=>{const c=this.jwt;return c!==null?Object.assign(Object.assign({},a),{headers:Object.assign(Object.assign({},a.headers),{Authorization:`Bearer ${c}`})}):a}),this.beginLogInByTransaction=ro.default.bind(null,t),this.broadcastMessage=ao.default.bind(null,t),this.completeLogInByTransaction=oo.default.bind(null,t),this.connectWallet=io.default.bind(null,t),this.createAlert=so.default.bind(null,t),this.createEmailTarget=lo.default.bind(null,t),this.createSmsTarget=uo.default.bind(null,t),this.createTargetGroup=fo.default.bind(null,t),this.createTelegramTarget=_o.default.bind(null,t),this.createDiscordTarget=co.default.bind(null,t),this.createSource=mo.default.bind(null,t),this.createSourceGroup=go.default.bind(null,t),this.createSupportConversation=po.default.bind(null,t),this.createWebhookTarget=To.default.bind(null,t),this.deleteAlert=vo.default.bind(null,t),this.deleteSourceGroup=Io.default.bind(null,t),this.deleteTargetGroup=$o.default.bind(null,t),this.findTenantConfig=ho.default.bind(null,t),this.getAlerts=Po.default.bind(null,t),this.getConfigurationForDapp=Co.default.bind(null,t),this.getConnectedWallets=Oo.default.bind(null,t),this.getConversationMessages=Mo.default.bind(null,t),this.getEmailTargets=Ao.default.bind(null,t),this.getFilters=wo.default.bind(null,t),this.getNotificationHistory=ko.default.bind(null,t),this.getSmsTargets=jo.default.bind(null,t),this.getSourceGroups=qo.default.bind(null,t),this.getSources=Ro.default.bind(null,t),this.getTargetGroups=Bo.default.bind(null,t),this.getTelegramTargets=Lo.default.bind(null,t),this.getDiscordTargets=Go.default.bind(null,t),this.getTopics=Uo.default.bind(null,t),this.getWebhookTargets=Wo.default.bind(null,t),this.logInFromDapp=Do.default.bind(null,t),this.refreshAuthorization=Fo.default.bind(null,t),this.sendEmailTargetVerificationRequest=bo.default.bind(null,t),this.sendConversationMessages=Eo.default.bind(null,t),this.updateSourceGroup=yo.default.bind(null,t),this.updateTargetGroup=So.default.bind(null,t),this.getDiscordTargetVerificationLink=No.default.bind(null,t)}}V.NotifiAxiosService=Vo;(function(e){var r=d&&d.__createBinding||(Object.create?function(a,c,n,o){o===void 0&&(o=n);var l=Object.getOwnPropertyDescriptor(c,n);(!l||("get"in l?!c.__esModule:l.writable||l.configurable))&&(l={enumerable:!0,get:function(){return c[n]}}),Object.defineProperty(a,o,l)}:function(a,c,n,o){o===void 0&&(o=n),a[o]=c[n]}),t=d&&d.__exportStar||function(a,c){for(var n in a)n!=="default"&&!Object.prototype.hasOwnProperty.call(c,n)&&r(c,a,n)};Object.defineProperty(e,"__esModule",{value:!0}),t(V,e)})(vn);const Ho=Sn({async setup(){const e=Nn(),r=hn(()=>e),t=Be(null),a=Be(null),c=async()=>{await t.value.deleteAlert({id:"6241fde98ebf416bb69f70d657177359"}),await t.value.deleteAlert({id:"6e0ffa6e295243aa8d9853f1146c26cd"})},n=async()=>{await t.value._service.deleteSourceGroup({id:"8415e6ccc00047a4b2d995fc0269d821"}),await t.value._service.deleteSourceGroup({id:"e5e74e45f2f54659b01222cd74c58baf"})},o=async()=>{await t.value._service.deleteTargetGroup({id:"4cf31f2395cb44fb90cf53a6bdd618d7"}),await t.value._service.deleteTargetGroup({id:"9a628f69ca34472e8199ae4db14d08a5"}),await t.value._service.deleteTargetGroup({id:"c9ad0743233e4f5dac45c78d2b213ec9"}),await t.value._service.deleteTargetGroup({id:"db980f40c3ea48479156a2c987d7a440"})},l=async()=>{const _="Development",{gqlUrl:F}=i.notifiConfigs(_),L=new vn.NotifiAxiosService({gqlUrl:F});a.value=L,await a.value.getConfigurationForDapp({dappAddress:"cetus"}),await a.value.getTopics(),await t.value.connectWalletImpl({ConnectWalletInput:{},ConnectWalletResult:{address:"cetus",walletBlockchain:"APTOS"}})},u=async()=>{await t.value.getTargetGroups()},m=async()=>{await t.value.getSourceGroups()},p=async()=>{await t.value._service.getEmailTargets()},f=async()=>{const[_,F,L,H,W,z,yn]=await Promise.all([a.value.getAlerts(),a.value.getSources(),a.value.getSourceGroups(),a.value.getTargetGroups(),a.value.getEmailTargets(),a.value.getSmsTargets(),a.value.getTelegramTargets()]),qe=new Set,Re=[];return F.flatMap(E=>(E==null?void 0:E.applicableFilters)??[]).forEach(E=>{qe.has(E.id)||(Re.push(E),qe.add(E.id))}),{alerts:_,filters:Re,sources:F,sourceGroups:L,targetGroups:H,emailTargets:W,smsTargets:z,telegramTargets:yn}};return{toSubscribe:()=>{},logIn:async()=>{const _=`Sign in with Notifi 

    No password needed or gas is needed. 

    Clicking “Approve” only means you have proved this wallet is owned by you! 

    This request will not trigger any transaction or cost any gas fees. 

    Use of our website and service is subject to our terms of service and privacy policy. 
 
 'Nonce:' `,F=r.value.currentWallet.publicAccount,L=F.address,H=F.publicKey,W=Math.round(Date.now()/1e3),z=await r.value.currentWallet.signMessage({address:!0,message:_,nonce:`${W}`});await a.value.logInFromDapp({walletBlockchain:"APTOS",walletPublicKey:H,accountId:L,dappAddress:"cetus",timestamp:W,signature:z.signature})},initNotifi:l,createAlert:async()=>{await t.value.getTargetGroups();const _={pool_address:"11111111111111111111111111111111",position_nft:"11111111111111111111111111111111",position_index:"1"};await t.value.ensureAlert({eventType:{type:"directPush",name:"position",directPushId:{type:"value",value:"alarm"},tooltipContent:JSON.stringify(_)},inputs:{test:JSON.stringify(_)}})},getSourceGroups:m,getTargetGroups:u,getAlerts:p,fetchData:async()=>await f(),deleteAlert:c,deleteSourceGroup:n,deleteTargetGroup:o}}});function zo(e,r,t,a,c,n){const o=Mn;return Cn(),On("div",null,[G(o,{onClick:e.initNotifi},{default:A(()=>[w("initNotifi")]),_:1},8,["onClick"]),G(o,{onClick:e.logIn},{default:A(()=>[w("logIn")]),_:1},8,["onClick"]),G(o,{onClick:e.deleteAlert},{default:A(()=>[w("deleteAlert")]),_:1},8,["onClick"]),G(o,{onClick:e.deleteSourceGroup},{default:A(()=>[w("deleteSourceGroup")]),_:1},8,["onClick"]),G(o,{onClick:e.deleteTargetGroup},{default:A(()=>[w("deleteTargetGroup")]),_:1},8,["onClick"]),G(o,{onClick:e.createAlert},{default:A(()=>[w("createAlert")]),_:1},8,["onClick"])])}const Zo=Pn(Ho,[["render",zo]]);export{Zo as default};
