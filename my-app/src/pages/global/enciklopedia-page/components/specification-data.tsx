import React from 'react';

// TODO:
// Put this information in database
// Make structure for each prop

const SpecificationData: Spec[] = [
    {
        image: 'https://alliedyachting.com/wp-content/uploads/2015/12/SailBoat_rigs.jpg',
        text: 'Types of Sailboats by Type of Rig 16 December 2015 To have a better idea of which types of sailboats would best suit your needs, your Allied Yachting broker can advise you on the various options available on the market for new or second-hand vessels as well as new construction. In the meantime, here is a summarized guide to the different categories of sailing yachts by type of rig, whether they are monohull (single hull) or multihull, as they’re called in the Mediterranean.',
    },
    {
        image: 'https://improvesailing.com/media/pages/guides/sailboat-keel-types/3066990295-1599330506/sailboat-keel-types-diagram-1024x-q80.png',
        text:
  <div>
    <h3>The most common keel types</h3>
    <li>
      Full keels run from front to aft and are the most stable keel type,
      making them the most popular cruising keel.
    </li>
    <li>
      Fin keels offer the best performance but are less comfortable.
      This makes them popular for racing. Fin keels are bolted on to the hull and generally
      run deep and thin.
    </li>
    <span>
      Bulb and wing keels are both variants on the fin keel.
    </span>
    <li>Bulb keels carry additional ballast in the tip, making them more stable.</li>
    <li>
      Wing keels have two tips at the end of the keel, which reduces crossflow,
      improving directional stability.
    </li>
    <li>
      Bilge keels are double fin or double full kees,
      which allows the boat to be beached, making them the most popular keel for tidal waters.
    </li>
    <li>
      Lifting keels are moveable keels that can be lowered and raised,
      allowing the boat to enter shallow waters as well.
    </li>
    <li>
      Centerboard keels are a pivoting lifting keel,
      allowing to sail both coastal and inland waters.
    </li>
    <li>
      Leeboards are fins on the sides of flat-bottomed hulls boats, making a keel unnecessary.
    </li>
  </div>,
    },
    {
        image: 'https://improvesailing.com/media/pages/guides/sail-types/3513587046-1567549155/sail_types-sloop-2-small.jpg',
        text:
          `What are the different types of sails? Most sailboats have one mainsail and one headsail.
          Typically, the mainsail is a fore-and-aft bermuda rig (triangular shaped).
          A jib or genoa is used for the headsail. Most sailors use additional sails for
          different conditions: the spinnaker (a common downwind sail),
          gennaker, code zero (for upwind use), and stormsail.
          Each sail has its own use. Want to go downwind fast? Use a spinnaker.
          But you can't just raise any sail and go for it.
          It's important to understand when (and how) to use each sail.
          Your rigging also impacts what sails you can use.`,

    },
    {
        image: 'data:image/jpeg;base64,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',
        text: 'Knowing these basic knots will make you more useful as a sailing companion. Next time you go out sailing with a friend, take a charter, or join a flotilla, you’ll feel more comfortable helping out around the boat when it’s time to put fenders out, tie up to the dock, or make a line fast.',
    },
];

export default SpecificationData;
