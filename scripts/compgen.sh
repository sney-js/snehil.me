
if [[ "$1" = "--help" ]]; then
  echo "usage: ./scripts/compgen elements MyExample";
  exit 1;
fi

if [ "$#" -ne 2 ]; then
  echo "ERROR. USAGE: ./scripts/compgen elements MyExample";
  exit 1;
fi

COMPFOLDER="$1"
COMPNAME="$2"
DUMMY="Abc"
CURRDIR=`pwd`
COPY_DIR="./src/$COMPFOLDER/$COMPNAME"

mkdir -p "$COPY_DIR" || "dir exists"

echo "Copying Files to ./src/$COMPFOLDER/$COMPNAME"
cp -r ./scripts/Abc/* "$COPY_DIR"

cd "$COPY_DIR"
for f in Abc* ; do
  sed -i '' "s/Abc/$COMPNAME/g" "$f"
  sed -i '' "s/COMPFOLDER/$COMPFOLDER/g" "$f"
  NEWFILE="$COMPNAME${f#Abc}"
  mv "$f" "$NEWFILE";
  echo "Edited Content for '$NEWFILE'"
done
sed -i '' "s/Abc/$COMPNAME/g" "index.ts"
cd $CURRDIR
echo "Generation complete!"
echo ""
echo ":: Next Steps ::"
echo ""
echo "1. Add the following import into src/$COMPFOLDER/$COMPFOLDER.scss"
echo "@import \"./$COMPNAME/$COMPNAME\";"
echo ""
echo "2. Execute the following into terminal to create index."
echo "npx crcf --createindex src/$COMPFOLDER"
echo "2.1 Remember to also correct import * as SvgElements from './SvgElements';"

