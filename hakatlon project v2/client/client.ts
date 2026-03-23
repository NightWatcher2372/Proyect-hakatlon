import * as web3 from "@solana/web3.js";
import * as anchor from "@coral-xyz/anchor";
import * as anchor from "@coral-xyz/anchor";
import type { ControlEscolar } from "../target/types/control_escolar";

// Configure the client to use the local cluster
anchor.setProvider(anchor.AnchorProvider.env());

const program = anchor.workspace.ControlEscolar as anchor.Program<ControlEscolar>;


const provider = anchor.AnchorProvider.env();
anchor.setProvider(provider);

const program = anchor.workspace.ControlEscolar;

async function main() {
  const estudiante = anchor.web3.Keypair.generate();

  console.log("PublicKey:", estudiante.publicKey.toString());

  // Crear estudiante
  await program.methods
    .crearEstudiante("Juan Perez")
    .accounts({
      estudiante: estudiante.publicKey,
      user: provider.wallet.publicKey,
      systemProgram: anchor.web3.SystemProgram.programId,
    })
    .signers([estudiante])
    .rpc();

  console.log("✅ Estudiante creado");

  // Registrar calificación
  await program.methods
    .registrarCalificacion(85)
    .accounts({
      estudiante: estudiante.publicKey,
    })
    .rpc();

  console.log("✅ Calificación registrada");

  // Registrar falta
  await program.methods
    .registrarFalta()
    .accounts({
      estudiante: estudiante.publicKey,
    })
    .rpc();

  console.log("✅ Falta registrada");

  // Cambiar estatus
  await program.methods
    .cambiarEstatus(false)
    .accounts({
      estudiante: estudiante.publicKey,
    })
    .rpc();

  console.log("✅ Estudiante dado de baja");
}

main();