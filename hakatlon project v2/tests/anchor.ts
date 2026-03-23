import * as web3 from "@solana/web3.js";
import * as anchor from "@coral-xyz/anchor";
/import * as anchor from "@coral-xyz/anchor";
import type { ControlEscolar } from "../target/types/control_escolar";

describe("control_escolar", () => {
  // Configure the client to use the local cluster
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.ControlEscolar as anchor.Program<ControlEscolar>;
  
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.ControlEscolar;

  it("Flujo completo estudiante", async () => {
    const estudiante = anchor.web3.Keypair.generate();

    // Crear
    await program.methods
      .crearEstudiante("Alumno Test")
      .accounts({
        estudiante: estudiante.publicKey,
        user: provider.wallet.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
      })
      .signers([estudiante])
      .rpc();

    // Calificación
    await program.methods
      .registrarCalificacion(90)
      .accounts({
        estudiante: estudiante.publicKey,
      })
      .rpc();

    // Falta
    await program.methods
      .registrarFalta()
      .accounts({
        estudiante: estudiante.publicKey,
      })
      .rpc();

    // Extra
    await program.methods
      .registrarExtra(70)
      .accounts({
        estudiante: estudiante.publicKey,
      })
      .rpc();

    // Baja
    await program.methods
      .cambiarEstatus(false)
      .accounts({
        estudiante: estudiante.publicKey,
      })
      .rpc();

    const cuenta = await program.account.estudiante.fetch(estudiante.publicKey);

    console.log("Resultado final:", cuenta);
  });
});